const BankBenefits = () => {
  return (
    <section className="bank_benefits_container">
      <div className="benefits_upper_container">
        <div className="benefits_left_content">
          <h3 className="benefits_title">
            Make your money <br /> transfer simple and clear
          </h3>
          <ul className="benefits_ul">
            <li className="benefit">
              {" "}
              <img src="assets/check-circle.png" alt="Checkmark logo" /> Banking
              transactions are free for you
            </li>
            <li className="benefit">
              {" "}
              <img src="assets/check-circle.png" alt="Checkmark logo" /> No
              monthly cash commission
            </li>
            <li className="benefit">
              {" "}
              <img src="assets/check-circle.png" alt="Checkmark logo" /> Manage
              payments and transactions online
            </li>
          </ul>
          <button className="learn_more_btn">Learn more &#8594;</button>
        </div>

        <div>
          <img src="assets/simplermoney.png" alt="Payments graph" />
        </div>
      </div>

      <div className="benefits_lower_container">
        <div>
          <img
            src="assets/internationalbankdetails.png"
            alt="Phone contacts with card"
          />
        </div>

        <div className="benefits_right_content">
          <h3 className="benefits_title">
            Receive payment from <br /> international bank details
          </h3>

          <div className="benefits_inter_container">
            <article>
              <div className="benefit_icon_container">
                <img src="assets/payments.svg.png" alt="Payment logo" />
              </div>
              <p className="bank_benefit">
                Manage your payments online. Mollis congue egestas egestas
                fermentum fames.
              </p>
            </article>

            <article>
              <div className="benefit_icon_container">
                <img src="assets/cashback.svg.png" alt="Cashback logo" />
              </div>
              <p className="bank_benefit">
                A elementur and imperdiet enim, pretium etiam facilisi aenean
                quam mauris.
              </p>
            </article>
          </div>
          <button className="learn_more_btn">Learn more &#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default BankBenefits;
