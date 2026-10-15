CREATE TABLE public.service_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 kind text NOT NULL CHECK (kind IN ('reparation','reprise')),
 category text NOT NULL CHECK (category IN ('telephone','tablette','ordinateur','console')),
 brand text NOT NULL CHECK (char_length(brand) BETWEEN 1 AND 100),
 model text NOT NULL CHECK (char_length(model) BETWEEN 1 AND 150),
 fault text NOT NULL CHECK (char_length(fault) BETWEEN 1 AND 100),
 description text NOT NULL CHECK (char_length(description) BETWEEN 10 AND 3000),
 name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
 email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
 phone text NOT NULL DEFAULT '' CHECK (char_length(phone) <= 30),
 consent boolean NOT NULL CHECK (consent = true),
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.service_requests TO anon, authenticated;
GRANT ALL ON public.service_requests TO service_role;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can submit requests" ON public.service_requests FOR INSERT TO anon, authenticated WITH CHECK (consent = true);