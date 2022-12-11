import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="4"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  );
};
