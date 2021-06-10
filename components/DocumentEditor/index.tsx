import {
  SlatePlugins,
  createReactPlugin,
  createHistoryPlugin,
  createParagraphPlugin,
  createBlockquotePlugin,
  createHeadingPlugin,
  createBoldPlugin,
  createItalicPlugin,
  createUnderlinePlugin,
  createSlatePluginsComponents,
  createSlatePluginsOptions,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  ELEMENT_H1,
  ELEMENT_PARAGRAPH,
  HeadingToolbar,
  ToolbarMark,
  ToolbarElement,
  useStoreEditorRef,
  useEventEditorId,
  getSlatePluginType
} from "@udecode/slate-plugins";
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
  HeadingIcon
} from "@radix-ui/react-icons";
import { styled } from "../../stitches.config";

const pluginsBasic = [
  // editor
  createReactPlugin(), // withReact
  createHistoryPlugin(), // withHistory

  // elements
  createParagraphPlugin(), // paragraph element
  createBlockquotePlugin(), // blockquote element
  createHeadingPlugin(), // heading elements

  // marks
  createBoldPlugin(), // bold mark
  createItalicPlugin(), // italic mark
  createUnderlinePlugin() // underline mark
];

const components = createSlatePluginsComponents();
const options = createSlatePluginsOptions();

const initialValueBasic = [
  {
    type: ELEMENT_PARAGRAPH,
    children: [
      {
        text: "This text is bold, italic and underlined.",
        [MARK_BOLD]: true,
        [MARK_ITALIC]: true,
        [MARK_UNDERLINE]: true
      }
    ]
  }
];

const Editor = styled("div", {
  "& .slate-Toolbar": {
    display: "flex",
    border: "2px black"
  }
});

export const DocumentEditor = (props) => {
  const editableProps = {
    placeholder: props.placeholder,
    style: {
      padding: "15px"
    }
  };

  const editor = useStoreEditorRef(useEventEditorId("focus"));

  return (
    <Editor>
      <HeadingToolbar>
        <ToolbarElement
          type={getSlatePluginType(editor, ELEMENT_H1)}
          icon={<HeadingIcon />}
        />
        <ToolbarMark
          type={getSlatePluginType(editor, MARK_BOLD)}
          icon={<FontBoldIcon />}
        />
        <ToolbarMark
          type={getSlatePluginType(editor, MARK_ITALIC)}
          icon={<FontItalicIcon />}
        />
        <ToolbarMark
          type={getSlatePluginType(editor, MARK_UNDERLINE)}
          icon={<UnderlineIcon />}
        />
      </HeadingToolbar>
      <SlatePlugins
        editableProps={editableProps}
        plugins={pluginsBasic}
        components={components}
        options={options}
        initialValue={initialValueBasic}
        onChange={(newValue) => props.onChange(newValue)}
      >
        {props.children}
      </SlatePlugins>
    </Editor>
  );
};
