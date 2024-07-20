type Props = {
  label: string;
  value: number;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const TimeInput = ({ label, value, placeholder, onChange }: Props) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <label className="text-gray-600 md:text-lg">{label}</label>
      <input onChange={onChange} value={value} type="number" placeholder={placeholder} className="min-w-0 border w-[48px] py-1 text-center rounded" />
    </div>
  );
};

export default TimeInput;
