import { Button } from "components/Button";
import "./Theme.stories.css";

const component = () => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button onClick={() => {}}>Button</Button>
      <Button variant="secondary" onClick={() => {}}>
        Button
      </Button>
    </div>
  );
};

export const Theme = () => (
  <div>
    <div
      className="st-theme-dark"
      style={{
        padding: "8px",
        background: "var(--st-gray-80)",
      }}
    >
      <div className="st-typography-header">Scoped Dark Theme</div>
      <br />
      {component()}
    </div>
    <br />
    <div>
      <div
        style={{
          padding: "8px",
          border: "1px solid var(--st-gray-40)",
        }}
        className="my-theme"
      >
        <div className="st-typography-header">
          Scoped CSS Variable Overrides
        </div>
        <br />
        {component()}
      </div>
    </div>
    <br />
  </div>
);

export default { component: Theme };
