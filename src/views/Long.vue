<template lang="pug">
PageWrapper
  //- IconOccasions
  ImgServices
  ExtPckgServices
  JobStages
</template>

<script>
import PageWrapper from '@cmp/PageWrapper';
import IconOccasions from '@cmp/IconOccasions';
import ImgServices from '@cmp/ImgServices';
import ExtPckgServices from '@cmp/ExtPckgServices';
import JobStages from '@cmp/JobStages';

export default {
  name: 'LongView',
  components: {
    PageWrapper,
    IconOccasions,
    ImgServices,
    ExtPckgServices,
    JobStages,
  },
};
</script>
