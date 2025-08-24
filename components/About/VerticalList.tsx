import { colors } from '../../constants/constants';
import useConfig from '../../hooks/useConfig';
import Button from '../Button/Button';


const VerticalList = () => {
  const {data:config} = useConfig();
  return (
    <div className="flex flex-col px-5 mt-12 font-semibold">
      <ul className="list-none w-[26.5rem] divide-y divide-border">
        <li className="py-4 text-2xl">
          <span className="font-bold">Name:</span> {config?.fullname}
        </li>
        <li className="py-4 text-2xl">
          <span className="font-bold">Email:</span> <span className="text-primary">{config?.email}</span>
        </li>
        <li className="py-4 text-2xl">
          <span className="font-bold">Age:</span> {config?.age}
        </li>
        <li className="py-4 text-2xl border-0">
          <span className="font-bold">From:</span> Khroub, Constantine
        </li>
      </ul>
      <Button
        color="white"
        width="19.5rem"
        height="5rem"
        backGroundColor={colors.primaryColor}
        hoverBackground={colors.hoverPrimaryColor}
        outline={false}
        className="mt-8"
      >
        Download CV
      </Button>
    </div>
  )
}

export default VerticalList