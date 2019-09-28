SELECT
	a.name,
	b.name,
	c.salary
FROM nama AS a
JOIN work AS b
JOIN kategori AS c ON a.id_work = b.id AND a.id_salary = c.id
