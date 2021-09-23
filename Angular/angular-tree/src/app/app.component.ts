import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
interface FoodNode {
  name: string;
  designation: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Steve',
    designation: 'Founder',
    children: [
      {
        name: 'Rahul',
        designation: 'CEO',
        children: [
          { name: 'Rajat', designation: 'Tech Lead' },
          { name: 'Rahul', designation: 'HR' },
          { name: 'Varsha', designation: 'Design Lead' },
        ],
      },
      {
        name: 'William',
        designation: 'CFO',
        children: [{ name: 'Shivani', designation: 'Finanace Lead' }],
      },
      {
        name: 'Sarita',
        designation: 'CTO',
        children: [{ name: 'Rajesh', designation: 'Technology Lead' }],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  designation: string;
  level: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tree';
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      designation: node.designation,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
