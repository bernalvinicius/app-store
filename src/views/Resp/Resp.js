import React, { useState } from "react";
import "./index.scss";

const Resp = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  let opened = !open ? "closed" : "open";

  console.log("opened: ", opened);
  console.log("open: ", open);

  return (
    <div className="flex-container">
      <nav className={`nav-categories ${opened}`}>
        <h2>Categories</h2>
        <div class="close" onClick={toggleSidebar}>
          <svg width="1em" height="1em" viewBox="0 0 12 12">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-318.000000, -363.000000)"
                fill="#000000"
                fillRule="nonzero"
              >
                <path
                  d="M318.234315,373.616648 C317.921896,373.929067 317.921892,374.435597 318.23432,374.748025 C318.54673,375.060434 319.053273,375.060443 319.365691,374.748025 L329.548029,364.565687 C329.860447,364.253269 329.860438,363.746726 329.548029,363.434316 C329.235601,363.121888 328.729071,363.121892 328.416652,363.434311 L318.234315,373.616648 Z M319.365688,363.234318 C319.05327,362.921899 318.546746,362.921889 318.234318,363.234318 C317.921908,363.546727 317.921899,364.05327 318.234318,364.365688 L328.416655,374.548026 C328.729074,374.860445 329.235617,374.860435 329.548026,374.548026 C329.860454,374.235598 329.860445,373.729074 329.548026,373.416655 L319.365688,363.234318 Z"
                  fill="currentColor"
                />
              </g>
            </g>
          </svg>
        </div>
      </nav>
      <section class="apps-list">
        <header>
          {!open && (
            <div class="burguer-button" onClick={toggleSidebar}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          <span>INPUT</span>
        </header>
        <div
          style={{
            height: "172px",
            border: "1px solid #6c7680",
          }}
        >
          APP DETAILS
        </div>
      </section>
    </div>
  );
};

export default Resp;
