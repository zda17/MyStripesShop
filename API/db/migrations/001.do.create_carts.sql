CREATE TABLE carts (
	created_at
		TIMESTAMPTZ
		NOT NULL 
		DEFAULT now(),
	updated_at
		TIMESTAMPTZ
		NOT NULL
		DEFAULT now()
);