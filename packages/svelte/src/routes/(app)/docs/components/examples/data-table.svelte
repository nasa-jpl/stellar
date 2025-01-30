<script lang="ts">
  import * as Table from '$lib/components/ui/table/index.js';

  const satellites = [
    {
      designation: 'SATCOM-4A',
      orbit: 'GEO',
      altitude: '35,786 km',
      inclination: '0.1°',
      mass: '3,450 kg',
      power: '12.5 kW',
      status: 'Operational',
      launchDate: '2021-03-15',
    },
    {
      designation: 'EARTHOBS-7B',
      orbit: 'LEO',
      altitude: '705 km',
      inclination: '98.2°',
      mass: '1,250 kg',
      power: '4.2 kW',
      status: 'Operational',
      launchDate: '2022-08-23',
    },
    // ... existing code skipped ...
    {
      designation: 'NAVSAT-12',
      orbit: 'MEO',
      altitude: '20,200 km',
      inclination: '55°',
      mass: '2,150 kg',
      power: '8.1 kW',
      status: 'Degraded',
      launchDate: '2019-11-30',
    },
  ];

  // Add more realistic satellite data
  for (let i = 1; i <= 15; i++) {
    satellites.push({
      designation: `SAT-${(Math.random() * 1000).toFixed(0).padStart(4, '0')}`,
      orbit: ['LEO', 'MEO', 'GEO', 'HEO'][Math.floor(Math.random() * 4)],
      altitude: `${(Math.random() * 36000).toFixed(0)} km`,
      inclination: `${(Math.random() * 120).toFixed(1)}°`,
      mass: `${(Math.random() * 5000 + 500).toFixed(0)} kg`,
      power: `${(Math.random() * 15 + 2).toFixed(1)} kW`,
      status: ['Operational', 'Degraded', 'Offline', 'Maintenance'][Math.floor(Math.random() * 4)],
      launchDate: new Date(
        2018 + Math.floor(Math.random() * 6),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1,
      )
        .toISOString()
        .split('T')[0],
    });
  }
</script>

<Table.Root>
  <!-- <Table.Caption>Active Satellite Fleet Status Monitor</Table.Caption> -->
  <Table.Header>
    <Table.Row>
      <Table.Head class="w-[180px]">Designation</Table.Head>
      <Table.Head>Orbit</Table.Head>
      <Table.Head>Altitude</Table.Head>
      <Table.Head>Inclination</Table.Head>
      <Table.Head>Mass</Table.Head>
      <Table.Head>Power</Table.Head>
      <Table.Head>Status</Table.Head>
      <Table.Head class="text-right">Launch Date</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body class="w-full">
    {#each satellites as satellite, i (i)}
      <Table.Row>
        <Table.Cell class="font-medium text-ellipsis" size="sm">{satellite.designation}</Table.Cell>
        <Table.Cell size="sm">{satellite.orbit}</Table.Cell>
        <Table.Cell size="sm">{satellite.altitude}</Table.Cell>
        <Table.Cell size="sm">{satellite.inclination}</Table.Cell>
        <Table.Cell size="sm">{satellite.mass}</Table.Cell>
        <Table.Cell size="sm">{satellite.power}</Table.Cell>
        <Table.Cell size="sm">
          <span
            class={satellite.status === 'Operational'
              ? 'text-green-900 bg-green-50 dark:text-green-200 dark:bg-green-900/80 border border-accent px-1 rounded-sm'
              : satellite.status === 'Degraded'
                ? 'text-yellow-900 dark:text-yellow-200 bg-yellow-50/20 dark:bg-yellow-900/80 border border-yellow-200 dark:border-yellow-800 px-1 rounded-sm'
                : satellite.status === 'Maintenance'
                  ? 'text-blue-800 dark:text-blue-200 bg-blue-50/20 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-1 rounded-sm'
                  : 'text-red-800 dark:text-red-200 bg-red-50 dark:bg-red-900 border border-destructive/20 px-1 rounded-sm'}
          >
            {satellite.status}
          </span>
        </Table.Cell>
        <Table.Cell class="text-right" size="sm">{satellite.launchDate}</Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>
