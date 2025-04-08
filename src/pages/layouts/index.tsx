import './index.less';
import LayoutWrap from './layoutWrap';

const Index = () => {
  return (
    <LayoutWrap title="自适应宽度拖拽">
      <div className={'wrapper'}>
        <div className={'columnLeft'}>
          <div className={'resize-line'} />
          <div className={'resize-bar'} />
          <div className={'resize-save'} style={{ background: 'orange' }}></div>
        </div>
        <div className={'columnRight'}></div>
      </div>
    </LayoutWrap>
  );
};

export default Index;
