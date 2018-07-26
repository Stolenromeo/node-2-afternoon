UPDATE Products SET
description = $2
WHERE product_id=$1;

SELECT * FROM Products