import React, { useState } from 'react';
import { FileButton, Group, Input, Modal, Select, Text } from '@mantine/core';

import classes from '../Driver.module.scss';
import { Button } from '@/components/Button';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const Form: React.FC<IProps> = ({ open, onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  return (
    <Modal opened={open} onClose={onClose} centered className={classes.form} title="Tarifni almashtirish">
      <div className="flex flex-col gap-4">
        <Input.Wrapper label="Ism">
          <Input type="text" placeholder="Ismingizni kiriting" />
        </Input.Wrapper>
        <Input.Wrapper label="Tarif turi">
          <Select
            type="text"
            placeholder="Tanlang"
            className={classes.select}
            data={['Standart', 'Komfort', 'Biznes']}
          />
        </Input.Wrapper>
        <>
          <Group>
            <FileButton onChange={setFile} accept="image/png,image/jpeg">
              {props => <Button {...props}>To'lov skrinshotini yuklang</Button>}
            </FileButton>
          </Group>

          {file && <Text size="sm">Belgilandi: {file.name}</Text>}
        </>
      </div>
      <Button variant="filled" justify="center" mt="md">
        Yuborish
      </Button>
    </Modal>
  );
};

export default Form;
