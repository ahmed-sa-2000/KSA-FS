
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
    "ext_purchaseordersourcelookups",
    "ext_purchaseorderstatuslookups",
    "int_installments",
    "int_installmentdetails",
    "int_installmentitems",
    "int_deposits", 
    "int_purchaseorders"
];

const promotion_db_sources = [
    "ext_promotiontypeconfigs",
    "ext_promotiontypes",
    "int_promotions",
    "int_promomerchants"
];


const onboarding_db_sources = [
    "ext_questioncategory",
    "ext_questiontype",
    "ext_question",
    "ext_answeroption",
    "int_customeranswerdetails",
    "int_customers",
    "ext_CustomerAddresses",
    "ext_applicationstatuslookups",
    "ext_accountstatuslookups",
    "ext_natheerstatuslookups",
    "ext_customerstatuslookups",
    "ext_nafathstatuslookups"
]

// Combine both arrays into a single list
const allSources = [...merchant_db_sources, ...loans_db_sources, ...promotion_db_sources, ...onboarding_db_sources];

allSources
  .filter(Boolean) // Drops any accidental empty strings, nulls, or undefined values
  .forEach((table) => {
    declare({
      database: "rifd-datascience-sa",
      schema: "aman_test",
      name: table,
    });
  });