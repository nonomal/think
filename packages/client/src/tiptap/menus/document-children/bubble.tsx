import { Space, Button } from '@douyinfe/semi-ui';
import { IconCopy, IconDelete } from '@douyinfe/semi-icons';
import { Tooltip } from 'components/tooltip';
import { BubbleMenu } from 'tiptap/views/bubble-menu';
import { DocumentChildren } from 'tiptap/extensions/document-children';
import { copyNode, deleteNode } from 'tiptap/prose-utils';
import { Divider } from 'tiptap/divider';

export const DocumentChildrenBubbleMenu = ({ editor }) => {
  return (
    <BubbleMenu
      className={'bubble-menu'}
      editor={editor}
      pluginKey="document-children-bubble-menu"
      shouldShow={() => editor.isActive(DocumentChildren.name)}
      tippyOptions={{ maxWidth: 'calc(100vw - 100px)' }}
    >
      <Space>
        <Tooltip content="复制">
          <Button
            onClick={() => copyNode(DocumentChildren.name, editor)}
            icon={<IconCopy />}
            type="tertiary"
            theme="borderless"
            size="small"
          />
        </Tooltip>

        <Divider />

        <Tooltip content="删除节点" hideOnClick>
          <Button
            onClick={() => deleteNode(DocumentChildren.name, editor)}
            icon={<IconDelete />}
            type="tertiary"
            theme="borderless"
            size="small"
          />
        </Tooltip>
      </Space>
    </BubbleMenu>
  );
};