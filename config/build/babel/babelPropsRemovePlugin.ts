import {type PluginItem} from '@babel/core';

export default function (): PluginItem {
  return {
    visitor: {
      Program(path, state) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const props = state.opts.props || [];

        path.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name;

            if (props.includes(nodeName)) {
              current.parentPath.remove();
            }
          },
        });
      },
    },
  };
}
