import FrameComponent from 'react-frame-component';

const Frame = ({ children, ...props }) => <FrameComponent {...props}>{children}</FrameComponent>;
Frame.displayName = 'Frame';

export { Frame };
