import React, { Component } from 'react';
import Btn from './Btn';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

class Lists extends Component {
  state = {
    lists: [{
      id: 1,
      text: '幼教综合评量',
      item: 'One',
      draggable: true,
    }, {
      id: 2,
      text: '个性化方案',
      item: 'Two',
      draggable: true,
    }, {
      id: 3,
      text: '我的',
      item: 'Three',
      draggable: true,
    },{
      id: 4,
      text: '幼教综合评量',
      item: 'Three',
      draggable: true,
    },{
      id: 5,
      text: '幼教综合评量',
      item: 'Three',
      draggable: true,
    }],
    childLists: [{
      id: 6,
      text: '父母课堂',
      item: 'Four',
      draggable: true,
    }, {
      id: 10,
      text: '个性化方案',
      item: 'Six',
      draggable: true,
      treeData: [
        { title: '班级圈', key: '0' },
        { title: '宝妈排行', key: '1' },
        { title: '幼教综合评量', key: '2', isLeaf: true },
      ],
    },{
      id: 7,
      text: '我的宝卡',
      item: 'Five',
      draggable: true,
    }, {
      id: 8,
      text: '扫一扫',
      item: 'Six',
      draggable: true,
    },{
      id: 9,
      text: '缴费',
      item: 'Five',
      draggable: true,
    }, {
      id: 10,
      text: '选择宝宝',
      item: 'Six',
      draggable: true,
    },],
  }
  
  getListsDom = () => {
    const { lists } = this.state
    return lists.map(e => 
      <div className="menuContent">
        <Btn name="menuItem" key={e.id} {...e} />
        <p className="menuTip">{ e.text }</p>
      </div>
    )
  }
  
  renderTreeNodes = (data) => {
    return data.map((item) => {
      return (
        <TreeNode title={item.title} key={item.id} dataRef={item}/>
      );
      return <TreeNode {...item} />;
    });
  }
  
  getChildListsDom = () => {
    const { childLists } = this.state
    return childLists.map(e => {
      const tree = (
        <Tree
          checkable
          defaultExpandedKeys={['0-0-0', '0-0-1']}
          defaultCheckedKeys={['0-0-0-0', '0-0-0-1']}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
        >
        <TreeNode title={e.text} key={e.key}>
           {e.treeData && this.renderTreeNodes(e.treeData)}
        </TreeNode>
        </Tree>
      )
      return (
        <div className="menuContent">
          <Btn name="menuItem" key={e.id} {...e} />
          { e.treeData ? tree : <p className="menuTip">{ e.text }</p> }
        </div>
      )
    })
  }
  
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }
  
  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }
  render() {
    return (
      <div className="menuContainer">
        <div className="firstMenu">
          <p className="menuTitle">一级菜单</p>
          <div className="menuBox">{ this.getListsDom() }</div>
        </div>
        <div className="childMenu">
          <p className="menuTitle">子菜单</p>
          <div className="menuBox">{ this.getChildListsDom() }</div>
        </div>
      </div>
    )
  }
}

export default Lists;
