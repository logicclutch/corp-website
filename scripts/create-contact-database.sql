-- Create contacts table for final form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(100),
  phone VARCHAR(20),
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create contact_drafts table for auto-saved form data
CREATE TABLE IF NOT EXISTS contact_drafts (
  id SERIAL PRIMARY KEY,
  session_id VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(100),
  email VARCHAR(255),
  company VARCHAR(100),
  phone VARCHAR(20),
  subject VARCHAR(200),
  message TEXT,
  form_completion_percentage INTEGER DEFAULT 0,
  last_field_updated VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_drafts_session_id ON contact_drafts(session_id);
CREATE INDEX IF NOT EXISTS idx_drafts_updated_at ON contact_drafts(updated_at);
CREATE INDEX IF NOT EXISTS idx_drafts_completion ON contact_drafts(form_completion_percentage);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
DROP TRIGGER IF EXISTS update_contacts_updated_at ON contacts;
CREATE TRIGGER update_contacts_updated_at
    BEFORE UPDATE ON contacts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_drafts_updated_at ON contact_drafts;
CREATE TRIGGER update_drafts_updated_at
    BEFORE UPDATE ON contact_drafts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
