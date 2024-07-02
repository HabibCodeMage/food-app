interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  fill?: string;
}

export default IconProps;

export { default as StarIcon } from "./StarIcon";
export { default as GiftBoxIcon } from "./GiftBox";
