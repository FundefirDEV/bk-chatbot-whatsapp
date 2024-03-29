const bkPath = {
  register_as_a_new_partner: "Registrarme como nuevo socio",
  buy_actions: "Comprar acciones",
  apply_for_credit: "Solicitar crédito",
};

const bkPathAPI = {
  getUserExists: "/userExists",
  registerUser: "/registerUser",
  getUserActions: "/getUserActionsToBuy",
  postBuyActions: "/buy-actions",
  getUserCredit: "/getUserCreditToApply",
  applyForCredit: "/apply-for-credit",
};

module.exports = {
  bkPath,
  bkPathAPI,
};
