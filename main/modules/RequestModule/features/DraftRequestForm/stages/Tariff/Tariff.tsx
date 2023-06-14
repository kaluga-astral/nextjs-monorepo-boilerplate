import { useFormContext } from '@main/shared';

import { TariffFormAutocomplete } from '../../../TariffFormAutocomplete';
import { TariffStageValues } from '../../store';

export const TariffStage = () => {
  const { control } = useFormContext<TariffStageValues>();

  return (
    <div>
      <TariffFormAutocomplete
        name="tariff"
        label="Выберите тариф"
        control={control}
      />
    </div>
  );
};
