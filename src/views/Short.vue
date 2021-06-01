<template lang="pug">
PageWrapper
  //- OccasionsList
  //- ServicesList
  //- PackageServices
</template>

<script>
import PageWrapper from '@cmp/PageWrapper';
import OccasionsList from '@cmp/OccasionsList';
import ServicesList from '@cmp/ServicesList';
import PackageServices from '@cmp/PackageServices';

export default {
  name: 'ShortView',
  components: {
    PageWrapper,
    OccasionsList,
    ServicesList,
    PackageServices,
  },
};
</script>
