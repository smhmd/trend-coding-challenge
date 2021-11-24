import React from 'react'
import { CellProps } from 'react-table'
import { Influencer } from '~/types'
import * as Dialog from '@radix-ui/react-dialog'
import * as Avatar from '@radix-ui/react-avatar'

export const AvatarWithDialog = ({ value: src }: AvatarWithDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Avatar.Root>
          <Avatar.Image alt='influencer' src={src} />
        </Avatar.Root>
      </Dialog.Trigger>
      <Dialog.Overlay />
      <Dialog.Content>
        <img alt='' role='presentation' src={src} />
      </Dialog.Content>
    </Dialog.Root>
  )
}

type AvatarWithDialogProps = CellProps<Influencer, string>
