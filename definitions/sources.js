// definitions/sources/declarations.js

// ------------------ Empty tables ------------------
//---- Merchant DB ------------
// 1. ext_Banners (empty)
// 2. ext_DealerReconciliations (ignore)


//---- Loans DB ------------
// 1.


const merchant_db_sources = [
  "int_dealers",
  "int_dealersstores",
  "int_merchantroles",
  "int_users",
  "ext_requeststatuses",
  "ext_adminrequests",
  "ext_roles",
  "ext_merchantapplications",
  "ext_merchantapplicationstatus",
];

const loans_db_sources = [
    "ext_installmentsstatuslookups",
    "ext_installmentssourceslookups",
    "ext_installmentsdetailsstatuslookups",
    "ext_installmentitemsstatuslookups",
    "ext_depositsstatuslookups",
    "ext_depositstypeslookups",
    "ext_promostagelookups",
    "ext_promotionstypeslookups",
    "int_installments",
    "int_installmentdetails",
    "int_installmentitems",
    "int_deposits"
];

const promotion_db_sources = [
    "ext_promotiontypeconfigs",
    "ext_promotiontypes",
    "int_promotions",
    "int_promomerchants"
];

// Combine both arrays into a single list
const allSources = [...merchant_db_sources, ...loans_db_sources, ...promotion_db_sources];

allSources
  .filter(Boolean) // Drops any accidental empty strings, nulls, or undefined values
  .forEach((table) => {
    declare({
      database: "rifd-datascience-sa",
      schema: "aman_test",
      name: table,
    });
  });