import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectSm() {
  return (
    <Select>
      <SelectTrigger size="sm" className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent size="sm">
        <SelectGroup>
          <SelectLabel size="sm">Fruits</SelectLabel>
          <SelectItem size="sm" value="apple">
            Apple
          </SelectItem>
          <SelectItem size="sm" value="banana">
            Banana
          </SelectItem>
          <SelectItem size="sm" value="blueberry">
            Blueberry
          </SelectItem>
          <SelectItem size="sm" value="grapes">
            Grapes
          </SelectItem>
          <SelectItem size="sm" value="pineapple">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
