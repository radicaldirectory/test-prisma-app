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
  ELEMENT_PARAGRAPH,
  HeadingToolbar,
  ToolbarMark,
  useStoreEditorRef,
  useEventEditorId,
  getSlatePluginType
} from "@udecode/slate-plugins";

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

export const DocumentEditor = (props) => {
  const editableProps = {
    placeholder: props.placeholder,
    style: {
      padding: "15px"
    }
  };

  const editor = useStoreEditorRef(useEventEditorId("focus"));

  return (
    <>
      <HeadingToolbar>
        <ToolbarMark
          type={getSlatePluginType(editor, MARK_BOLD)}
          icon={<span>B</span>}
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
    </>
  );
};
