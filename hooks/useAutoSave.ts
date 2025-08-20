"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"

interface FormData {
  [key: string]: string
}

interface AutoSaveOptions {
  initialData?: FormData
  debounceMs?: number
  onSave?: (data: FormData, fieldName: string) => Promise<void>
  enabled?: boolean
}

export function useAutoSave({ initialData = {}, debounceMs = 1000, onSave, enabled = true }: AutoSaveOptions) {
  const [formData, setFormData] = useState<FormData>(initialData)
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)

  // Handle input changes
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
      setLastUpdated(name)
    },
    [],
  )

  // Set form data without triggering auto-save
  const setFormValues = useCallback((data: FormData) => {
    setFormData(data)
  }, [])

  // Reset form to initial state
  const resetForm = useCallback(() => {
    setFormData(initialData)
    setLastUpdated(null)
    setSaveError(null)
  }, [initialData])

  // Auto-save effect
  useEffect(() => {
    if (!enabled || !onSave || !lastUpdated) return

    const timer = setTimeout(async () => {
      try {
        setIsSaving(true)
        setSaveError(null)
        await onSave(formData, lastUpdated)
      } catch (error) {
        console.error("Error saving form data:", error)
        setSaveError(error instanceof Error ? error.message : "Failed to save")
      } finally {
        setIsSaving(false)
      }
    }, debounceMs)

    return () => clearTimeout(timer)
  }, [formData, lastUpdated, debounceMs, onSave, enabled])

  return {
    formData,
    handleChange,
    setFormValues,
    resetForm,
    isSaving,
    saveError,
  }
}
