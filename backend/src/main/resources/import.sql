-- public.clientes definition

-- Drop table

-- DROP TABLE public.clientes;

CREATE TABLE public.clientes
(
    id_cliente       bigserial    NOT NULL,
    apellido         varchar(255) NULL,
    direccion        varchar(255) NULL,
    email            varchar(255) NULL,
    fecha_nacimiento date NULL,
    nombre           varchar(255) NOT NULL,
    telefono         varchar(255) NULL,
    CONSTRAINT clientes_pkey PRIMARY KEY (id_cliente)
);

-- public.detalles_factura definition

-- Drop table

-- DROP TABLE public.detalles_factura;

CREATE TABLE public.detalles_factura
(
    num_detalle int8 NOT NULL,
    cantidad    int4 NOT NULL,
    precio      int8 NOT NULL,
    id_factura  int8 NOT NULL,
    id_producto int8 NOT NULL,
    CONSTRAINT detalles_factura_pkey PRIMARY KEY (id_factura, num_detalle)
);


-- public.detalles_factura foreign keys

ALTER TABLE public.detalles_factura
    ADD CONSTRAINT fkckjrxkqnt3dkubs620it00yow FOREIGN KEY (id_factura) REFERENCES public.facturas (num_factura);
ALTER TABLE public.detalles_factura
    ADD CONSTRAINT fkirnldhve1bnlhup51w02li3hl FOREIGN KEY (id_producto) REFERENCES public.productos (id_producto);

-- public.facturas definition

-- Drop table

-- DROP TABLE public.facturas;

CREATE TABLE public.facturas
(
    num_factura bigserial NOT NULL,
    fecha       date      NOT NULL,
    id_cliente  int8      NOT NULL,
    CONSTRAINT facturas_pkey PRIMARY KEY (num_factura)
);


-- public.facturas foreign keys

ALTER TABLE public.facturas
    ADD CONSTRAINT fkp2ab9l9b5y3b0pv1ag1hfiun7 FOREIGN KEY (id_cliente) REFERENCES public.clientes (id_cliente);

-- public.productos definition

-- Drop table

-- DROP TABLE public.productos;

CREATE TABLE public.productos
(
    id_producto bigserial    NOT NULL,
    nombre      varchar(255) NOT NULL,
    precio      int8         NOT NULL,
    stock       int4         NOT NULL,
    CONSTRAINT productos_pkey PRIMARY KEY (id_producto)
);

-- INSERT

INSERT INTO CLIENTES (NOMBRE, APELLIDO, DIRECCION, FECHA_NACIMIENTO, TELEFONO, EMAIL)
VALUES ('John', 'Medina', 'Cl. 8 #69d-23', '1990-08-08', '7029292', 'john@hotmail.com');
INSERT INTO CLIENTES (NOMBRE, APELLIDO, DIRECCION, FECHA_NACIMIENTO, TELEFONO, EMAIL)
VALUES ('Juan', 'Mesa', 'Cl. 113 #7-21', '1985-05-20', '456789', 'juan@gmail.com');
INSERT INTO CLIENTES (NOMBRE, APELLIDO, DIRECCION, FECHA_NACIMIENTO, TELEFONO, EMAIL)
VALUES ('Mari', 'Dias', 'Cl. 134 ## 9 - 51', '1973-03-12', '852569', 'mari@hotmail.com');
INSERT INTO CLIENTES (NOMBRE, APELLIDO, DIRECCION, FECHA_NACIMIENTO, TELEFONO, EMAIL)
VALUES ('Pedro', 'Perez', 'Cl. 118 #16-61 Oficina 204 ', '1973-03-12', '852569', 'pedro@hotmail.com');
INSERT INTO CLIENTES (NOMBRE, APELLIDO, DIRECCION, FECHA_NACIMIENTO, TELEFONO, EMAIL)
VALUES ('Camilo', 'Caicedo', 'Cl. 118 #16-61 Oficina 204 ', '1973-03-12', '852569', 'camilo@hotmail.com');
INSERT INTO CLIENTES (NOMBRE, APELLIDO, DIRECCION, FECHA_NACIMIENTO, TELEFONO, EMAIL)
VALUES ('Andres', 'Aroca', 'Cl. 118 #16-61 Oficina 204 ', '1973-03-12', '852569', 'andres@hotmail.com');
INSERT INTO CLIENTES (NOMBRE, APELLIDO, DIRECCION, FECHA_NACIMIENTO, TELEFONO, EMAIL)
VALUES ('Freddy', 'Perez', 'Cl. 118 #16-61 Oficina 204 ', '1973-03-12', '852569', 'camacho@hotmail.com');
INSERT INTO CLIENTES (NOMBRE, APELLIDO, DIRECCION, FECHA_NACIMIENTO, TELEFONO, EMAIL)
VALUES ('Alexander', 'gomez', 'Cl. 118 #16-61 Oficina 204 ', '1973-03-12', '852569', 'alexander@hotmail.com');
INSERT INTO CLIENTES (NOMBRE, APELLIDO, DIRECCION, FECHA_NACIMIENTO, TELEFONO, EMAIL)
VALUES ('Jose', 'Rodriguez', 'Cl. 118 #16-61 Oficina 204 ', '1973-03-12', '852569', 'jose@hotmail.com');
INSERT INTO CLIENTES (NOMBRE, APELLIDO, DIRECCION, FECHA_NACIMIENTO, TELEFONO, EMAIL)
VALUES ('Arturo', 'sanchez', 'Cl. 118 #16-61 Oficina 204 ', '1973-03-12', '852569', 'arturo@hotmail.com');
INSERT INTO CLIENTES (NOMBRE, APELLIDO, DIRECCION, FECHA_NACIMIENTO, TELEFONO, EMAIL)
VALUES ('Alberto', 'Plata', 'Cl. 118 #16-61 Oficina 204 ', '1973-03-12', '852569', 'alberto@hotmail.com');

INSERT INTO PRODUCTOS (NOMBRE, PRECIO, STOCK)
VALUES ('Televisor', 5800000, 10);
INSERT INTO PRODUCTOS (NOMBRE, PRECIO, STOCK)
VALUES ('Computador', 6200000, 21);
INSERT INTO PRODUCTOS (NOMBRE, PRECIO, STOCK)
VALUES ('Impresora', 750000, 5);
INSERT INTO PRODUCTOS (NOMBRE, PRECIO, STOCK)
VALUES ('Celular', 300000, 12);
INSERT INTO PRODUCTOS (NOMBRE, PRECIO, STOCK)
VALUES ('Teclado', 100000, 12);
INSERT INTO PRODUCTOS (NOMBRE, PRECIO, STOCK)
VALUES ('Mouse', 400000, 9);
INSERT INTO PRODUCTOS (NOMBRE, PRECIO, STOCK)
VALUES ('Audifonos', 800000, 7);
INSERT INTO PRODUCTOS (NOMBRE, PRECIO, STOCK)
VALUES ('Microfono', 900000, 3);

INSERT INTO FACTURAS (ID_CLIENTE, FECHA)
VALUES (1, '2022-01-06');
INSERT INTO FACTURAS (ID_CLIENTE, FECHA)
VALUES (2, '2022-04-06');

INSERT INTO DETALLES_FACTURA (NUM_DETALLE, ID_FACTURA, ID_PRODUCTO, CANTIDAD, PRECIO)
VALUES (1, 1, 4, 2, 600000);
INSERT INTO DETALLES_FACTURA (NUM_DETALLE, ID_FACTURA, ID_PRODUCTO, CANTIDAD, PRECIO)
VALUES (2, 1, 3, 1, 550000);
INSERT INTO DETALLES_FACTURA (NUM_DETALLE, ID_FACTURA, ID_PRODUCTO, CANTIDAD, PRECIO)
VALUES (3, 1, 1, 3, 5400000);