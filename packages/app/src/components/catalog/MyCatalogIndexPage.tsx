// packages/app/src/components/catalog/MyCatalogIndexPage.tsx

import React from 'react';
import { CatalogTable, EntityLayout } from '@backstage/plugin-catalog';
import {
  EntityListProvider,
  EntitySearchBar,
  EntityKindPicker,
  EntityTypePicker,
  useEntityList,
} from '@backstage/plugin-catalog-react';

import {
  Content,
  ContentHeader,
  Header,
  Page,
} from '@backstage/core-components';
import { Grid, Box, Button } from '@material-ui/core';

const InnerCatalogPage = () => {
  const { entities, loading, error } = useEntityList();

  return (
    <Page themeId="my">
      <Header title="test" subtitle="안녕하시렵니까">
        {' '}
        gdasd
      </Header>
      <Content>
        sd
        <ContentHeader title="내 서비스 목록 ✨">
          <Button variant="contained" color="primary">
            새 서비스 등록
          </Button>
        </ContentHeader>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <EntitySearchBar />
          </Grid>
          <Grid item xs={6} md={2}>
            <EntityKindPicker />
          </Grid>
          <Grid item xs={6} md={2}>
            <EntityTypePicker />
          </Grid>
        </Grid>
        <Box mt={4}>
          <CatalogTable title={`하이하이 (${entities.length}개)`} />
        </Box>
      </Content>
    </Page>
  );
};

export const MyCatalogIndexPage = () => {
  return (
    <EntityListProvider>
      <InnerCatalogPage />
    </EntityListProvider>
  );
};
