/**
 * Asserts that a table is not empty (row count != 0).
 *
 * @param {string} tableName - The target table name to test
 */
function assertNotEmpty(tableName) {
  return assert(`assert_${tableName}_not_empty`)
    .description(`Verify ${tableName} has at least 1 row and is not empty`)
    .query(ctx => `
      SELECT
        row_count
      FROM (
        SELECT
          COUNT(*) AS row_count
        FROM
          ${ctx.ref(tableName)}
      )
      WHERE
        row_count = 0
    `);
}

module.exports = {
  assertNotEmpty
};