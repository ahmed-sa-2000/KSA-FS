// definitions/sources/declarations.js

// ------------------ Empty tables ------------------
//---- Merchant DB ------------
// 1. ext_Banners (empty)
// 2. ext_DealerReconciliations (ignore)


//---- Loans DB ------------
// 1.


const merchant_db_sources = [
  "ext_Dealers",
  "ext_DealersStores",
  "ext_MerchantRoles",
  "ext_Users",
  "ext_RequestStatuses",
  "ext_AdminRequests",
  "ext_Roles",
  "ext_MerchantApplications",
  "ext_MerchantApplicationStatus",
];

const loans_db_sources = [
    "ext_InstallmentsStatusLookups",
    "ext_InstallmentsSourcesLookups",
    "ext_InstallmentsDetailsStatusLookups",
    "ext_InstallmentItemsStatusLookups",
    "ext_DepositsStatusLookups",
    "ext_DepositsTypesLookups",
    "ext_PromoStageLookups",
    "ext_PromotionsTypesLookups"
];

// Combine both arrays into a single list
const allSources = [...merchant_db_sources, ...loans_db_sources];

allSources
  .filter(Boolean) // Drops any accidental empty strings, nulls, or undefined values
  .forEach((table) => {
    declare({
      database: "rifd-datascience-sa",
      schema: "Staging_Tables",
      name: table,
    });
  });