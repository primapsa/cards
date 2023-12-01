import type { Meta } from '@storybook/react'

import { Typography } from './'

const meta = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta

export const All = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography as={'p'} variant={'body1'}>
        body1
      </Typography>
      <Typography as={'p'} variant={'body2'}>
        body2
      </Typography>
      <Typography as={'h1'} variant={'h1'}>
        h1
      </Typography>
      <Typography as={'h2'} variant={'h2'}>
        h2
      </Typography>
      <Typography as={'h3'} variant={'h3'}>
        h3
      </Typography>
      <Typography as={'a'} variant={'link1'}>
        link1
      </Typography>
      <Typography as={'a'} variant={'link2'}>
        link2
      </Typography>
      <Typography as={'span'} variant={'overline'}>
        overline
      </Typography>
      <Typography as={'a'} variant={'subtitle1'}>
        subtitle1
      </Typography>
      <Typography as={'a'} variant={'subtitle2'}>
        subtitle2
      </Typography>
    </div>
  ),
}
