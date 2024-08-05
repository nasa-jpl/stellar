import * as React from 'react';
import { SVGProps } from 'react';
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.187 3H5c-1.886 0-2.828 0-3.414.586C1 4.172 1 5.115 1 7v4c0 1.886 0 2.829.586 3.414C2.172 15 3.114 15 5 15h4c1.886 0 2.828 0 3.414-.586C13 13.83 13 12.886 13 11V7.331l-1.867 1.854a6.553 6.553 0 0 1-2.177 1.432l-.911.365-.042.017a2.135 2.135 0 0 1-2.252-.486 2.126 2.126 0 0 1-.472-2.29l.001-.003.365-.912a6.553 6.553 0 0 1 1.43-2.18L9.188 3Zm2.472.166c.31.086.554.218.755.42.287.286.433.658.508 1.184L9.814 7.857a4.68 4.68 0 0 1-.477.413l-1.683-.83.016-.029a4.681 4.681 0 0 1 .735-.964l3.254-3.281ZM7.654 7.439l-.06 1.707-.246.099a.263.263 0 0 1-.274-.056.254.254 0 0 1-.056-.274l.365-.911c.078-.195.168-.383.271-.565Zm1.683.831-1.742.876.664-.267a4.68 4.68 0 0 0 .563-.27l.03-.018c.168-.096.33-.204.485-.321Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M11.753 3.071a.262.262 0 0 1 .358 0l1.076 1.077c.1.1.1.26 0 .359l-3.373 3.35a4.68 4.68 0 0 1-1.555 1.022l-.911.366a.263.263 0 0 1-.274-.056.254.254 0 0 1-.056-.274l.365-.911a4.68 4.68 0 0 1 1.022-1.557l3.348-3.376ZM14.951 1.307a1.108 1.108 0 0 0-1.531 0l-.575.575a.271.271 0 0 0 0 .383l1.148 1.15a.27.27 0 0 0 .383 0l.575-.575a1.085 1.085 0 0 0 0-1.533Z"
    />
  </svg>
);
export default SvgEdit;
