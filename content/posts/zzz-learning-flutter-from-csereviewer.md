---
title: Learning Flutter From CSEReviewer
subtitle: Documentation for CSEReviewer - Codes that I learned and used in this project. Mostly with the help of ChatGPT.
date: 2023-07-07T00:00:00+08:00
draft: true
tags:
  - all
  - documentation
comments: false
---

## Global Key

In Flutter, you can use a `GlobalKey` to access a child widget's functions from multiple parents. To achieve this, you can create a `GlobalKey` in the child widget and pass it to both parents.

Here's an example of how you can use `GlobalKey` with two different parents and a single child:

1. Create the child widget and define a `GlobalKey` inside it:

```dart
class ChildWidget extends StatefulWidget {
  const ChildWidget({Key? key}) : super(key: key);

  @override
  _ChildWidgetState createState() => _ChildWidgetState();
}

class _ChildWidgetState extends State<ChildWidget> {
  GlobalKey<_ChildWidgetState> childKey = GlobalKey<_ChildWidgetState>();

  void childFunction() {
    // Function logic here
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      // Child widget UI
    );
  }
}
```

1. Pass the `childKey` to both parent widgets and store a reference to it:

```dart
class ParentWidget extends StatelessWidget {
  final GlobalKey<_ChildWidgetState> childKey;

  const ParentWidget({Key? key, required this.childKey}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SomeWidget(
      child: ChildWidget(key: childKey),
    );
  }
}

class AnotherParentWidget extends StatelessWidget {
  final GlobalKey<_ChildWidgetState> childKey;

  const AnotherParentWidget({Key? key, required this.childKey}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SomeOtherWidget(
      child: ChildWidget(key: childKey),
    );
  }
}
```

1. Now, both parent widgets have access to the child's functions through the childKey:

```dart
// Accessing child's function from the parent widget
childKey.currentState?.childFunction();
```

By using the same `GlobalKey` in both parents, you can access the child widget's functions from either parent as needed.

## Convert String Date

```dart
import 'package:intl/intl.dart';

void main() {
  final dateString = "2023-05-16";
  final inputFormat = DateFormat("yyyy-MM-dd");
  final outputFormat = DateFormat("MMMM dd, yyyy");

  final date = inputFormat.parse(dateString);
  final formattedDate = outputFormat.format(date);

  print(formattedDate); // Output: May 16, 2023
}
```

## Icon

[https://www.geeksforgeeks.org/flutter-changing-app-icon/](https://www.geeksforgeeks.org/flutter-changing-app-icon/)

## Rewarded Ad

[https://chat.openai.com/share/fb53019f-b0a4-4a01-b686-353a5b863453](https://chat.openai.com/share/fb53019f-b0a4-4a01-b686-353a5b863453)

## Toast

Missing
