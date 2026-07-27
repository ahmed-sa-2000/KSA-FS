// definitions/sources/declarations.js

const sources = [
  "ext_Dealers",
  "ext_Banners",
  "ext_DealersStores",
  "ext_MerchantRoles",
  "ext_Users",
  "ext_RequestStatuses",
  "ext_AdminRequests",
  "ext_DealerReconciliations",
  "ext_Roles",
  "ext_MerchantApplications",
  "ext_MerchantApplicationStatus",
  "ext_RequestType"
];

sources
  .filter(Boolean) // Drops any accidental empty strings, nulls, or undefined values
  .forEach((table) => {
    declare({
      database: "aman-jarir-uat",
      schema: "Staging_Tables",
      name: table,
    });
  });