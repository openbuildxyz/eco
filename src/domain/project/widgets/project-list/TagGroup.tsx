import { useState } from 'react';
import { useCheckbox, Chip, VisuallyHidden, CheckboxGroup, tv } from '@nextui-org/react';

import type { TagId, Tag } from '../../../tag';

type TagGroupProps = {
  tags: Tag[];
  onChange: (tags: TagId[]) => void;
};

const checkbox = tv({
  slots: {
    base: 'border-default hover:bg-default-200',
    content: 'text-default-500',
  },
  variants: {
    isSelected: {
      true: {
        base: 'border-primary bg-primary hover:bg-primary-500 hover:border-primary-500',
        content: 'text-primary-foreground',
      },
    },
    isFocusVisible: {
      true: {
        base: 'outline-none ring-2 ring-focus ring-offset-2 ring-offset-background',
      },
    },
  },
})

const CustomCheckbox = (props: React.PropsWithChildren<any>) => {
  const {
    children,
    isSelected,
    isFocusVisible,
    getBaseProps,
    // getLabelProps,
    getInputProps,
  } = useCheckbox({
    ...props
  });

  const styles = checkbox({ isSelected, isFocusVisible });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color="primary"
        variant="faded"
        // {...getLabelProps()}
      >
        {children}
      </Chip>
    </label>
  );
}

function TagGroup({ tags, onChange }: TagGroupProps) {
  const [groupSelected, setGroupSelected] = useState<TagId[]>([]);

  const handleChange = (ids: TagId[]) => {
    setGroupSelected(ids);
    onChange(ids);
  }

  return (
    <CheckboxGroup orientation="horizontal" value={groupSelected} onChange={handleChange}>
      {tags.map(tag => (
        <CustomCheckbox key={tag.id} value={tag.id}>{tag.text}</CustomCheckbox>
      ))}
    </CheckboxGroup>
  );
}

export default TagGroup;
