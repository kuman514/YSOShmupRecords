import { useNavigate } from 'react-router-dom';

import { Button } from '^/components/atoms/Button';
import { ButtonType } from '^/types';

export function GoBackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type={ButtonType.CLEAR}
      customStyle={{
        color: 'unset',
      }}
      isDisabled={false}
      onClick={() => {
        navigate(-1);
      }}
    >
      목록으로 돌아가기
    </Button>
  );
}
