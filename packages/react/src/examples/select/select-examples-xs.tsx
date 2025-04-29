import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectXs() {
  return (
    <Select>
      <SelectTrigger size="xs" className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent size="xs">
        <SelectGroup>
          <SelectLabel size="xs">Fruits</SelectLabel>
          <SelectItem size="xs" value="apple">
            Apple
          </SelectItem>
          <SelectItem size="xs" value="banana">
            Banana
          </SelectItem>
          <SelectItem size="xs" value="blueberry">
            Blueberry
          </SelectItem>
          <SelectItem size="xs" value="grapes">
            Grapes
          </SelectItem>
          <SelectItem size="xs" value="pineapple">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
