import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = memo( () => {
  const { t } = useTranslation();

  return (
    <div>
      <Counter />
      { t( 'Главная страница' ) }
    </div>
  );
} );

export default MainPage;
