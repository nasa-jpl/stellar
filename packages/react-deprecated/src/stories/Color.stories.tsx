const ColorComponent = (props: { title: string }) => (
  <div style={{ marginBottom: "16px", alignItems: "center", display: "flex" }}>
    <div
      style={{
        border: "1px solid rgb(255,255,255,0.10)",
        width: "64px",
        height: "64px",
        background: `var(--st-${props.title})`,
      }}
    />
    <div style={{ marginLeft: "8px" }}>
      <div className="st-typography-medium">{props.title}</div>
      <div className="st-typography-label">
        CSS Variable: {`--st-${props.title}`}
      </div>
    </div>
  </div>
);

const colorClassNames = [
  "gray-10",
  "gray-15",
  "gray-20",
  "gray-30",
  "gray-40",
  "gray-50",
  "gray-60",
  "gray-70",
  "gray-80",
  "gray-90",
  "gray-100",
  "primary",
  "primary-10",
  "primary-20",
  "primary-30",
  "primary-40",
  "primary-50",
  "primary-60",
  "primary-70",
  "primary-80",
  "primary-90",
  "primary-100",
];
export const Color = () => (
  <div className="story-dark">
    {colorClassNames.map((c) => (
      <ColorComponent title={c} />
    ))}
  </div>
);

export default { component: Color };
