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
  "ext_RequestType"
];

const loans_db_sources = [
  "ext_InstallmentRequests",
  "ext_InstallmentRequestStatus",
  "ext_Coupons",
  "ext_DeliveryCodes",
  "ext_Deposits",
  "ext_DepositStatus",
  "ext_DepositTypes",
  "ext_InstallmentItems",
  "ext_InstallmentItemsStatus",
  "ext_PromotionTypeConfigs",
  "ext_PromotionTypes",
  "ext_Purchases",
  "ext_PurchaseOrders",
  "ext_PurchaseOrdersStatus",
  "ext_Claims",
  "ext_ClaimsStatus",
  "ext_NotificationTypes"
];

// Combine both arrays into a single list
const allSources = [...merchant_db_sources, ...loans_db_sources];

allSources
  .filter(Boolean) // Drops any accidental empty strings, nulls, or undefined values
  .forEach((table) => {
    declare({
      database: "aman-jarir-uat",
      schema: "Staging_Tables",
      name: table,
    });
  });