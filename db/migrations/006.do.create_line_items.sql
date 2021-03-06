CREATE TABLE line_items (
	quantity
		INTEGER
		DEFAULT 0,
	product_sku 
		TEXT
		REFERENCES products(sku) ON DELETE CASCADE
		NOT NULL,
	cart_id
		TEXT
		REFERENCES carts(UUID) ON DELETE CASCADE
		NOT NULL,
	order_id
		INTEGER
		REFERENCES orders(id) ON DELETE CASCADE,
	created_at
		TIMESTAMP(6) NOT NULL DEFAULT now(),
	updated_at
		TIMESTAMP NOT NULL DEFAULT now()
);