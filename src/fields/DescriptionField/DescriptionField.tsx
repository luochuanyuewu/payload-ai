import { withMergedProps } from '@payloadcms/ui/shared'

import { DescriptionFieldComponent } from './DescriptionFieldComponent.js'

export const DescriptionField = (options: any) => {
  const mergedPropsFunc = withMergedProps({
    Component: DescriptionFieldComponent,
    sanitizeServerOnlyProps: true,
    toMergeIntoProps: options,
  })

  // TODO: Might use this in order to add field entry for Instructions on plugin Init
  mergedPropsFunc.displayName = 'DescriptionField'

  return mergedPropsFunc
}