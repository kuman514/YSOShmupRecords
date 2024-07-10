import { useNavigate } from 'react-router-dom';

import { Button } from '^/components/atoms/Button';
import { ButtonType } from '^/types';

interface Props {
  typeId: string;
}

export function GoBackButton({ typeId }: Props) {
  const navigate = useNavigate();

  return (
    <Button
      type={ButtonType.CLEAR}
      customStyle={{
        color: 'unset',
      }}
      isDisabled={false}
      onClick={() => {
        navigate(`/records/${typeId}`);
      }}
    >
      목록으로 돌아가기
    </Button>
  );
}
