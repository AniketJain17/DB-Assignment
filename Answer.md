<h1 align="center">Second round of Assessment [Full Stack Developer]</h1>

**Questions**

-------

### Q1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram. ###

Ans. The relationship between the "Product" and "Product_Category" entities is established through a foreign key relationship. In particular, the "product" table's category_id column acts as a foreign key, creating a vital connection between these two databases. The referential integrity concept is upheld by this foreign key connection, guaranteeing that every product is closely linked to an authorized product category. Essentially, the values that are kept in the category_id column of the "product" database need to match the values that are already present in the "product_category" table's primary key column (id). Multiple goods can be classified under the same product category in this relationship, which is known as a many-to-one link. This allows for flexibility and organization within the database structure.

-------

### Q2. How could you ensure that each product in the "Product" table has a valid category assigned to it? ###

Ans. In order to ensure that every record in the "Product" database has a valid category assignment, referential integrity must be implemented by including foreign key constraints. This time, the "Product" table's category_id column is the target of the foreign key constraint, which specifically refers to the primary key represented by id in the "Product_Category" database. Foreign key constraints play a crucial role in preserving referential integrity, which is the idea that values contained in the category_id column of the "Product" table should always correspond to and match the values already stored in the primary key column (id) of the "Product_Category" table. The database system guarantees the coherence of connections by enforcing this link using foreign key constraints, which ensures that every product in the "Product" table is connected with a legitimate and existent category.

-------

### 3. Create schema in any Database script or any ORM (Object Relational Mapping). ###

```bash
Ans. In Schema.js File 

```
