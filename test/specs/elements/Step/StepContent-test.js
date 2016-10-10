import * as common from 'test/specs/commonTests'
import StepContent from 'src/elements/Step/StepContent'
import StepDescription from 'src/elements/Step/StepDescription'
import StepTitle from 'src/elements/Step/StepTitle'

describe('StepContent', () => {
  common.isConformant(StepContent)
  common.rendersChildren(StepContent)
  common.implementsShorthandItemProp(StepContent, {
    propKey: 'title',
    ShorthandComponent: StepTitle,
    mapValueToProps: val => ({ title: val }),
  })
  common.implementsShorthandItemProp(StepContent, {
    propKey: 'description',
    ShorthandComponent: StepDescription,
    mapValueToProps: val => ({ description: val }),
  })
})
