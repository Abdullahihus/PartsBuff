CREATE TABLE vehicles (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  year INT NOT NULL,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  trim TEXT,
  mileage INT,
  price NUMERIC(12,2),
  status TEXT NOT NULL CHECK (status IN ('For Sale','Part Out','Sold')),
  stock TEXT UNIQUE NOT NULL,
  vin TEXT,
  engine TEXT,
  transmission TEXT,
  drivetrain TEXT,
  color TEXT,
  description TEXT,
  location TEXT,
  highlights TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE vehicle_images (
  id BIGSERIAL PRIMARY KEY,
  vehicle_id BIGINT REFERENCES vehicles(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  position INT DEFAULT 0
);

CREATE TABLE parts (
  id BIGSERIAL PRIMARY KEY,
  vehicle_id BIGINT REFERENCES vehicles(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  category TEXT,
  condition TEXT,
  price NUMERIC(12,2),
  stock TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'Available',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE inquiries (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
