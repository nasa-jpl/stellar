export const Layout = () => (
  <div>
    <div>
      <div className="st-typography-medium">Grid Unit (8px)</div>
      <div className="st-typography-label">CSS Variable: --st-grid-unit</div>
      <div className="st-typography-label">
        Vertical Spacing Class: st-spacing--vertical--1
      </div>
      <div
        style={{
          background: "#ff000073",
          width: "50px",
          marginTop: "var(--st-grid-unit)",
        }}
        className="st-spacing--vertical--1"
      />
    </div>
    <div className="st-spacing--vertical--3" />
    <div>
      <div className="st-typography-medium">Grid Unit 2x</div>
      <div className="st-typography-label">CSS Variable: --st-grid-unit2x</div>
      <div className="st-typography-label">
        Vertical Spacing Class: st-spacing--vertical--2
      </div>
      <div
        style={{
          background: "#ff000073",
          width: "50px",
          marginTop: "var(--st-grid-unit)",
        }}
        className="st-spacing--vertical--2"
      />
    </div>
    <div className="st-spacing--vertical--3" />
    <div>
      <div className="st-typography-medium">Grid Unit 3x</div>
      <div className="st-typography-label">CSS Variable: --st-grid-unit3x</div>
      <div className="st-typography-label">
        Vertical Spacing Class: st-spacing--vertical--3
      </div>
      <div
        style={{
          background: "#ff000073",
          width: "50px",
          marginTop: "var(--st-grid-unit)",
        }}
        className="st-spacing--vertical--3"
      />
    </div>
    <div className="st-spacing--vertical--3" />
    <div>
      <div className="st-typography-medium">Grid Unit 4x</div>
      <div className="st-typography-label">CSS Variable: --st-grid-unit4x</div>
      <div className="st-typography-label">
        Vertical Spacing Class: st-spacing--vertical--4
      </div>
      <div
        style={{
          background: "#ff000073",
          width: "50px",
          marginTop: "var(--st-grid-unit)",
        }}
        className="st-spacing--vertical--4"
      />
    </div>
  </div>
);

export default { component: Layout };
