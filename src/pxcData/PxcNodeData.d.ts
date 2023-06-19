export interface PxcNodeData {
  'Warp': {
    inputs: {
      'Surface in': 4
      'Top left': 1
      'Top right': 1
      'Bottom left': 1
      'Bottom right': 1
      'Active': 2
    }
  }

  'Lua Surface': {
    inputs: {
      'Function name': 7
      'Output dimension': 0
      'Lua code': 7
      'Execution thread': 9
      'Execute on frame': 2
      'Argument name': 7
      'Argument type': 0
      'Argument value': 1
    }
  }

  'RGB Color': {
    inputs: {
      'Red': 1
      'Green': 1
      'Blue': 1
      'Normalized': 2
    }
  }

  'Attract': {
    inputs: {
      'Particles': 13
      'Area': 1
      'Falloff': 6
      'Falloff distance': 1
      'Effect Vector': 1
      'Strength': 1
      'Rotate particle': 1
      'Scale particle': 1
    }
  }

  'Cellular Noise': {
    inputs: {
      'Dimension': 0
      'Position': 1
      'Scale': 1
      'Seed': 1
      'Type': 0
      'Contrast': 1
      'Pattern': 0
      'Middle': 1
      'Radial scale': 1
      'Radial shatter': 1
      'Colored': 2
    }
  }

  'Twirl': {
    inputs: {
      'Surface in': 4
      'Center': 1
      'Strength': 1
      'Radius': 1
      'Oversample mode': 0
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Output': {
    inputs: {
      'Value': 11
      'Order': 0
    }
  }

  'Directional Blur': {
    inputs: {
      'Surface in': 4
      'Strength': 1
      'Direction': 0
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Time Remap': {
    inputs: {
      'Surface in': 4
      'Map': 4
      'Max life': 0
      'Loop': 2
    }
  }

  'Image Array': {
    inputs: {
      'Path': 5
      'Padding': 0
      'Canvas size': 0
      'Sizing method': 0
    }
  }

  'Group': {
    inputs: {
    }
  }

  'Pixel Expand': {
    inputs: {
      'Surface in': 4
      'Active': 2
    }
  }

  'Text': {
    inputs: {
      'Text': 7
    }
  }

  'Draw Gradient': {
    inputs: {
      'Dimension': 0
      'Gradient': 22
      'Type': 0
      'Angle': 0
      'Radius': 1
      'Shift': 1
      'Center': 1
      'Loop': 2
      'Mask': 4
      'Scale': 1
    }
  }

  'Array Get': {
    inputs: {
      'Array': 11
      'Index': 0
      'Overflow': 0
    }
  }

  'Stack': {
    inputs: {
      'Axis': 0
      'Align': 0
      'Spacing': 0
      'Input': 4
    }
  }

  'Repulse': {
    inputs: {
      'Fluid Domain': 15
      'Position': 1
      'Radius': 1
      'Strength': 1
      'Mode': 0
    }
  }

  'SDF': {
    inputs: {
      'Surface in': 4
      'Active': 2
      'Side': 0
      'Max distance': 1
    }
  }

  '3D Combine': {
    inputs: {
      'Dimension': 0
      'Object position': 1
      'Object rotation': 1
      'Object scale': 1
      'Render position': 1
      'Render scale': 1
      'Light direction': 1
      'Light height': 1
      'Light intensity': 1
      'Light color': 3
      'Ambient color': 3
      'Projection': 0
      'Field of view': 1
      'Scale view with dimension': 2
      '3D object': 10
    }
  }

  'RigidSim': {
    inputs: {
    }
  }

  'Polar': {
    inputs: {
      'Surface in': 4
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Display Text': {
    inputs: {
      'Color': 3
      'Text': 7
      'Style': 0
      'Alpha': 1
      'Line width': 1
    }
  }

  'Sample Path': {
    inputs: {
      'Path': 12
      'Ratio': 1
      'Type': 0
    }
  }

  'Palette Replace': {
    inputs: {
      'Palette in': 3
      'Palette from': 3
      'Palette to': 3
      'Threshold': 1
    }
  }

  'Simplex Noise': {
    inputs: {
      'Dimension': 0
      'Position': 1
      'Scale': 1
      'Iteration': 0
      'Color mode': 0
      'Color R range': 1
      'Color G range': 1
      'Color B range': 1
    }
  }

  'Mesh Transform': {
    inputs: {
      'Mesh': 18
      'Position': 1
      'Rotation': 0
      'Scale': 1
      'Anchor': 1
    }
  }

  'Repel': {
    inputs: {
      'Particles': 13
      'Area': 1
      'Falloff': 6
      'Falloff distance': 1
      'Effect Vector': 1
      'Strength': 1
      'Rotate particle': 1
      'Scale particle': 1
    }
  }

  'Color': {
    inputs: {
      'Color': 3
    }
  }

  'Cross product 3D': {
    inputs: {
      'Point 1': 1
      'Point 2': 1
    }
  }

  'Sort Output': {
    inputs: {
      'Result': 2
    }
  }

  'BW': {
    inputs: {
      'Surface in': 4
      'Brightness': 1
      'Contrast': 1
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Transform': {
    inputs: {
      'Surface in': 4
      'Output dimension': 0
      'Position': 1
      'Anchor': 1
      'Relative anchor': 2
      'Rotation': 0
      'Scale': 1
      'Render Mode': 2
      'Rotate by velocity': 1
      'Output dimension type': 0
      'Round position': 2
      'Active': 2
    }
  }

  'Filter Array': {
    inputs: {
      'Array': 11
    }
  }

  'Convert Base': {
    inputs: {
      'Value': 7
      'Base from': 0
      'Base to': 0
    }
  }

  'RegEx Replace': {
    inputs: {
      'Text': 7
      'Regex': 7
      'Replacement': 7
    }
  }

  'Gradient Shift': {
    inputs: {
      'Gradient': 22
      'Shift': 1
      'Wrap': 2
      'Scale': 1
    }
  }

  'Array Set': {
    inputs: {
      'Array': 11
      'Index': 0
      'Value': 11
    }
  }

  'Strand Force Apply': {
    inputs: {
      'Strand': 17
      'Shape': 0
      'Position': 1
      'Range': 1
      'Direction': 0
      'Falloff': 1
      'Strength': 1
      'Turbulence': 1
      'Seed': 0
      'Turbulence frequency': 1
      'Turbulence detail': 0
    }
  }

  'Frame': {
    inputs: {
      'Size': 0
      'Color': 3
      'Alpha': 1
    }
  }

  'Area': {
    inputs: {
      'Postion': 1
      'Size': 1
      'Shape': 1
    }
  }

  'Shape': {
    inputs: {
      'Dimension': 0
      'Background': 2
      'Shape': 0
      'Position': 1
      'Sides': 0
      'Inner radius': 1
      'Anti alising': 2
      'Rotation': 0
      'Angle range': 0
      'Corner radius': 1
      'Shape color': 3
      'Background color': 3
      'Height': 2
      'Start radius': 1
      'Shape path': 12
    }
  }

  'Add Fluid': {
    inputs: {
      'Fluid Domain': 15
      'Fluid brush': 4
      'Position': 1
      'Active': 2
      'Inherit velocity': 1
      'Density': 1
    }
  }

  '3D Extrude': {
    inputs: {
      'Surface in': 4
      'Dimension': 0
      'Object position': 1
      'Object rotation': 1
      'Object scale': 1
      'Render position': 1
      'Render rotation': 1
      'Render scale': 1
      'Manual generate': 19
      'Light direction': 1
      'Light height': 1
      'Light intensity': 1
      'Light color': 3
      'Ambient color': 3
      'Height map': 4
      'Always update': 2
      'Projection': 0
      'Field of view': 1
      'Scale view with dimension': 2
    }
  }

  'Edge Detect': {
    inputs: {
      'Surface in': 4
      'Algorithm': 0
      'Oversample mode': 0
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Render Spritesheet': {
    inputs: {
      'Sprites': 4
      'Sprite set': 0
      'Frame step': 0
      'Packing type': 0
      'Grid column': 0
      'Alignment': 0
      'Spacing': 0
      'Padding': 0
      'Range': 0
    }
  }

  'Curve': {
    inputs: {
      'Surface in': 4
      'Brightness': 6
      'Red': 6
      'Green': 6
      'Blue': 6
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Blend Path': {
    inputs: {
      'Path 1': 12
      'Path 2': 12
      'Ratio': 1
    }
  }

  'Outline': {
    inputs: {
      'Surface in': 4
      'Width': 0
      'Color': 3
      'Blend': 2
      'Blend alpha': 1
      'Position': 0
      'Anti alising': 2
      'Oversample mode': 0
      'Start': 0
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Convolution': {
    inputs: {
      'Surface in': 4
      'Kernel': 1
      'Oversample mode': 0
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Wind': {
    inputs: {
      'Particles': 13
      'Area': 1
      'Falloff': 6
      'Falloff distance': 1
      'Effect Vector': 1
      'Strength': 1
      'Rotate particle': 1
      'Scale particle': 1
    }
  }

  'Lua Global': {
    inputs: {
      'Lua code': 7
      'Run order': 0
      'Execution thread': 9
    }
  }

  'Replace Color': {
    inputs: {
      'Surface in': 4
      'Palette from': 3
      'Palette to': 3
      'Threshold': 1
      'Set others to black': 2
      'Multiply alpha': 2
      'Hard replace': 2
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Accelerate': {
    inputs: {
      'Particles': 13
      'Area': 1
      'Falloff': 6
      'Falloff distance': 1
      'Effect Vector': 1
      'Strength': 1
      'Rotate particle': 1
      'Scale particle': 1
    }
  }

  'Tunnel Out': {
    inputs: {
      'Name': 7
    }
  }

  'Input': {
    inputs: {
    }
  }

  'Contrast Blur': {
    inputs: {
      'Surface in': 4
      'Size': 1
      'Threshold': 1
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Threshold': {
    inputs: {
      'Surface in': 4
      'Mode': 0
      'Threshold': 1
      'Smoothness': 1
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Image GIF': {
    inputs: {
      'Path': 5
      'Set animation length to gif': 19
    }
  }

  'Struct Get': {
    inputs: {
      'Struct': 16
      'Key': 7
    }
  }

  'Triangular Grid': {
    inputs: {
      'Dimension': 0
      'Position': 1
      'Scale': 1
      'Gap': 1
      'Angle': 1
      'Tile color': 22
      'Gap color': 3
      'Texture': 4
      'Render type': 0
      'Seed': 1
    }
  }

  'Gradient': {
    inputs: {
      'Gradient': 22
      'Sample': 1
    }
  }

  'ASE Layer': {
    inputs: {
      'ASE data': 8
      'Use cel dimension': 2
    }
  }

  'Strand Update': {
    inputs: {
      'Strand': 17
      'Step': 0
    }
  }

  'Array Find': {
    inputs: {
      'Array': 11
      'Value': 11
    }
  }

  'Sprite Stack': {
    inputs: {
      'Base shape': 4
      'Dimension': 0
      'Stack amount': 0
      'Stack shift': 0
      'Position': 0
      'Rotation': 0
      'Stack blend': 3
      'Alpha end': 1
      'Move base': 2
    }
  }

  'Render Domain': {
    inputs: {
      'Fluid Domain': 15
      'Dimension': 0
      'Interpolate': 2
      'Draw Domain': 2
    }
  }

  'Nine Slice': {
    inputs: {
      'Surface in': 4
      'Dimension': 0
      'Splice': 0
      'Filling modes': 0
    }
  }

  'Scatter Points': {
    inputs: {
      'Point area': 1
      'Point distribution': 0
      'Scatter': 0
      'Point amount': 0
      'Distribution map': 4
      'Seed': 1
      'Fixed position': 2
      'Reference dimension': 0
    }
  }

  '2D Light': {
    inputs: {
      'Surface in': 4
      'Light shape': 0
      'Center': 1
      'Range': 1
      'Intensity': 1
      'Color': 3
      'Start': 0
      'Finish': 0
      'Sweep': 0
      'Sweep end': 0
      'Banding': 0
      'Attenuation': 0
      'Radial banding': 0
      'Radial start': 0
      'Radial band ratio': 1
      'Active': 2
    }
  }

  'RigidSim Global': {
    inputs: {
      'Gravity': 1
    }
  }

  'Bar / Graph': {
    inputs: {
      'Dimension': 0
      'Data': 1
      'Range': 1
      'Sample frequency': 1
      'Origin': 1
      'Scale': 1
      'Base Color': 3
      'Graph Thickness': 1
      'Use Background': 2
      'Background': 3
      'Direction': 0
      'Type': 0
      'Value Offset': 1
      'Color Over Sample': 22
      'Trim mode': 0
      'Window Size': 0
      'Window Offset': 1
      'Spacing': 1
      'Bar Width': 1
      'Rounded Bar': 2
      'Path': 12
      'Flip Value': 2
      'Loop': 2
      'Smooth': 1
    }
  }

  'Reverse Path': {
    inputs: {
      'Path': 12
    }
  }

  'Palette Extract': {
    inputs: {
      'Surface in': 4
      'Max colors': 0
      'Seed': 0
      'Algorithm': 0
    }
  }

  'Hexagonal Noise': {
    inputs: {
      'Dimension': 0
      'Seed': 1
      'Position': 1
      'Scale': 1
      'Texture sample': 4
      'Oversample mode': 0
    }
  }

  'Websocket Receiver': {
    inputs: {
      'Port': 0
      'Active': 2
    }
  }

  'Composite': {
    inputs: {
      'Padding': 0
      'Output dimension': 0
      'Dimension': 0
      'Background': 4
      'Position 0': 1
      'Rotation 0': 1
      'Scale 0': 1
    }
  }

  'Renderer': {
    inputs: {
      'Output dimension': 0
      'Round position': 2
      'Blend mode': 0
      'Particles': 13
    }
  }

  'Level Selector': {
    inputs: {
      'Surface in': 4
      'Mid point': 1
      'Range': 1
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Cross product 2D': {
    inputs: {
      'Point 1': 1
      'Point 2': 1
    }
  }

  'Sort Input': {
    inputs: {
      'Value in': 11
    }
  }

  'Trail': {
    inputs: {
      'Surface in': 4
      'Max life': 0
      'Loop': 2
      'Max distance': 0
      'Match color': 2
      'Blend color': 2
      'Alpha over life': 6
    }
  }

  'Loop Array': {
    inputs: {
      'Array': 11
    }
  }

  'Average': {
    inputs: {
      'Surface in': 4
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'RegEx Match': {
    inputs: {
      'Text': 7
      'Regex': 7
    }
  }

  'Gradient Replace': {
    inputs: {
      'Gradient': 22
      'Color from': 3
      'Color to': 3
      'Threshold': 1
    }
  }

  'Array Reverse': {
    inputs: {
      'Array': 11
    }
  }

  'Strand Create': {
    inputs: {
      'Type': 0
      'Density': 0
      'Length': 1
      'Segment': 1
      'Elasticity': 1
      'Path': 12
      'Position': 1
      'Side': 0
      'Spring': 1
      'Structure': 1
      'Seed': 0
      'Curl frequency': 1
      'Curliness': 1
      'Mesh': 18
      'Distribution': 0
      'Bake hair': 19
      'View fix hair': 2
      'Root strength': 1
    }
  }

  'Animation Control': {
    inputs: {
      'Toggle Play / Pause': 19
      'Pause': 19
      'Resume': 19
      'Play From Beginning': 19
      'Play once': 19
      'Skip Frames': 19
      'Skip Frames Count': 0
    }
  }

  'Cast Shadow': {
    inputs: {
      'Background': 4
      'Solid': 4
      'Light Position': 1
      'Soft light radius': 1
      'Light density': 0
      'Light type': 0
      'Ambient color': 3
      'Light color': 3
      'Light radius': 1
      'Render solid': 2
      'Use BG color': 2
      'BG threshold': 1
      'Light intensity': 1
      'Banding': 0
      'Attenuation': 0
      'Ambient occlusion': 0
      'Ambient occlusion strength': 1
      'Active': 2
    }
  }

  '3D Export': {
    inputs: {
      'Vertex data': 21
      'Path': 5
      'Export texture': 2
    }
  }

  'Rigidbody Variable': {
    inputs: {
      'Object': 14
    }
  }

  'Random': {
    inputs: {
      'seed': 0
      'from': 1
      'to': 1
    }
  }

  'Perlin Noise': {
    inputs: {
      'Dimension': 0
      'Position': 1
      'Scale': 1
      'Iteration': 0
      'Tile': 2
      'Seed': 1
      'Color mode': 0
      'Color R range': 1
      'Color G range': 1
      'Color B range': 1
    }
  }

  'CSV File Out': {
    inputs: {
      'Path': 5
      'Content': 11
    }
  }

  'Path Array': {
    inputs: {
      'Path': 12
    }
  }

  'Zigzag': {
    inputs: {
      'Dimension': 0
      'Amount': 0
      'Position': 0
      'Color 1': 3
      'Color 2': 3
      'Smooth': 2
    }
  }

  'Translate Point': {
    inputs: {
      'Point': 1
      'Mode': 0
      'Shift': 1
      'Direction': 1
      'Distance': 1
    }
  }

  'Vortex': {
    inputs: {
      'Fluid Domain': 15
      'Position': 1
      'Radius': 1
      'Strength': 1
      'Attraction': 1
      'Mode': 0
    }
  }

  'Lua Compute': {
    inputs: {
      'Function name': 7
      'Return type': 0
      'Lua code': 7
      'Execution thread': 9
      'Execute on frame': 2
      'Argument name': 7
      'Argument type': 0
      'Argument value': 1
    }
  }

  'Remove Color': {
    inputs: {
      'Surface in': 4
      'Colors': 3
      'Threshold': 1
      'Mask': 4
      'Mix': 1
      'Active': 2
      'Invert': 2
    }
  }

  'Vector4': {
    inputs: {
      'x': 1
      'y': 1
      'z': 1
      'w': 1
      'Integer': 2
    }
  }

  'Canvas': {
    inputs: {
      'Dimension': 0
      'Color': 3
      'Brush size': 0
      'Fill threshold': 1
      'Fill type': 0
      'Draw preview overlay': 2
      'Brush': 4
      'Surface amount': 0
      'Background': 4
      'Background alpha': 1
      'Render background': 2
    }
  }

  'Tunnel In': {
    inputs: {
      'Name': 7
      'Value in': 11
    }
  }

  'Lens Blur': {
    inputs: {
      'Surface in': 4
      'Strength': 1
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Texture Remap': {
    inputs: {
      'Surface in': 4
      'RG Map': 4
      'Active': 2
    }
  }

  'Animation': {
    inputs: {
      'Path': 5
      'Padding': 0
      'Stretch frame': 2
      'Frame duration': 1
      'Animation end': 0
      'Set animation length to match': 19
    }
  }

  'Struct': {
    inputs: {
      'Key': 7
      'value': 11
    }
  }

  'Grid Noise': {
    inputs: {
      'Dimension': 0
      'Position': 1
      'Scale': 1
      'Seed': 1
      'Shift': 1
      'Texture sample': 4
      'Shift axis': 0
      'Color mode': 0
      'Color R range': 1
      'Color G range': 1
      'Color B range': 1
    }
  }

  'ASE File In': {
    inputs: {
      'Path': 5
      'Generate layers': 19
      'Current tag': 7
    }
  }

  'Strand Render Texture': {
    inputs: {
      'Dimension': 0
      'Strand': 17
      'Thickness': 1
      'Random color': 22
      'Texture': 4
      'Seed': 1
    }
  }

  'Glow': {
    inputs: {
      'Surface in': 4
      'Border': 1
      'Size': 1
      'Strength': 1
      'Color': 3
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Array Copy': {
    inputs: {
      'Array': 11
      'Starting Index': 0
      'Size': 0
    }
  }

  'Solid': {
    inputs: {
      'Dimension': 0
      'Color': 3
      'Empty': 2
      'Mask': 4
      'Use mask dimension': 2
    }
  }

  'FluidSim': {
    inputs: {
    }
  }

  '3D Transform': {
    inputs: {
      'Dimension': 0
      'Object position': 1
      'Object rotation': 1
      'Object scale': 1
      'Render position': 1
      'Render scale': 1
      'Light direction': 1
      'Light height': 1
      'Light intensity': 1
      'Light color': 3
      'Ambient color': 3
      '3D object': 10
      'Projection': 0
      'Field of view': 1
      'Scale view with dimension': 2
    }
  }

  'Scatter': {
    inputs: {
      'Surface in': 4
      'Dimension': 0
      'Amount': 0
      'Scale': 1
      'Angle': 0
      'Area': 0
      'Distribution': 0
      'Point at center': 2
      'Uniform scaling': 2
      'Scatter': 0
      'Seed': 1
      'Random blend': 22
      'Alpha': 1
      'Distribution map': 4
      'Distribution data': 1
      'Array': 0
      'Multiply alpha': 2
      'Use value': 7
      'Blend mode': 0
      'Path': 12
    }
  }

  'Feedback': {
    inputs: {
    }
  }

  'Apply Force': {
    inputs: {
      'Object': 14
      'Force type': 0
      'Position': 1
      'Torque': 1
      'Apply frame': 0
      'Force': 1
      'Scope': 0
      'Strength': 1
      'Range': 1
    }
  }

  'Pixel Sort': {
    inputs: {
      'Surface in': 4
      'Iteration': 0
      'Threshold': 1
      'Direction': 0
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Displace': {
    inputs: {
      'Surface in': 4
      'Displace map': 4
      'Position': 1
      'Strength': 1
      'Mid value': 1
      'Color data': 0
      'Iterate': 2
      'Oversample mode': 0
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Path plot': {
    inputs: {
      'Output scale': 1
      'Coordinate': 0
      'Equation type': 0
      '0 function': 7
      '1 function': 7
      'Origin': 1
      'Range': 1
      'Input scale': 1
      'Input shift': 1
    }
  }

  'Palette': {
    inputs: {
      'Palette': 3
      'Trim range': 1
    }
  }

  'Path to Mesh': {
    inputs: {
      'Path': 12
      'Sample': 0
      'Algorithm': 0
    }
  }

  'Compare': {
    inputs: {
      'Type': 0
      'a': 1
      'b': 1
    }
  }

  'VFX Override': {
    inputs: {
      'Particles': 13
      'Positions': 1
      'Rotations': 1
      'Scales': 1
      'Blend': 3
      'Alpha': 1
      'Surface': 4
    }
  }

  'Boolean': {
    inputs: {
      'Value': 2
    }
  }

  'Loop': {
    inputs: {
      'Repeat': 0
    }
  }

  'Switch': {
    inputs: {
      'Index': 7
      'Default value': 11
      'Case': 7
      'value': 11
    }
  }

  'Audio Window': {
    inputs: {
      'Audio Array': 1
      'Sample': 0
      'Size': 0
    }
  }

  'Combine Text': {
    inputs: {
      'Text A': 7
      'Text B': 7
    }
  }

  '4 Points Gradient': {
    inputs: {
      'Dimension': 0
      'Center 1': 1
      'Color 1': 3
      'Center 2': 1
      'Color 2': 3
      'Center 3': 1
      'Color 3': 3
      'Center 4': 1
      'Color 4': 3
      'Use palette': 2
      'Palette': 3
    }
  }

  'Array Remove': {
    inputs: {
      'Array': 11
      'Type': 0
      'Index': 0
      'Value': 11
      'Spread array': 2
    }
  }

  'Strand Collision': {
    inputs: {
      'Strand': 17
      'Collision mesh': 18
    }
  }

  'Evaluate Curve': {
    inputs: {
      'Curve': 6
      'Progress': 1
      'Minimum': 1
      'Maximum': 1
    }
  }

  'Shadow': {
    inputs: {
      'Surface in': 4
      'Color': 3
      'Strength': 1
      'Shift': 0
      'Grow': 1
      'Blur': 1
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Flood Fill': {
    inputs: {
      'Surface in': 4
      'Mask': 4
      'Mix': 1
      'Active': 2
      'Position': 1
      'Colors': 3
      'Threshold': 1
      'Diagonal': 2
    }
  }

  '3D Displace': {
    inputs: {
      'Dimension': 0
      'Object position': 1
      'Object rotation': 1
      'Object scale': 1
      'Render position': 1
      'Render scale': 1
      'Light direction': 1
      'Light height': 1
      'Light intensity': 1
      'Light color': 3
      'Ambient color': 3
      '3D vertex': 21
      'Projection': 0
      'Field of view': 1
      'Scale view with dimension': 2
      'Displacement map': 4
      'Strength': 1
    }
  }

  'Render': {
    inputs: {
      'Render dimension': 1
      'Object': 14
    }
  }

  'Wave Path': {
    inputs: {
      'Path': 12
      'Frequency': 1
      'Size': 1
      'Shift': 1
      'Smooth': 2
    }
  }

  'CSV File In': {
    inputs: {
      'Path': 5
      'Convert to number': 2
    }
  }

  'Path Anchor': {
    inputs: {
      'Postion': 1
      'Control point 1': 1
      'Control point 2': 1
      'Mirror control point': 2
    }
  }

  'Number': {
    inputs: {
      'Value': 1
      'Integer': 2
      'Display': 0
      'Range': 1
      'Step': 1
    }
  }

  'Area Warp': {
    inputs: {
      'Surface in': 4
      'Area': 1
      'Active': 2
    }
  }

  'Condition': {
    inputs: {
      'Check value': 1
      'Condition': 0
      'Compare to': 1
      'True': 11
      'False': 11
      'Eval mode': 0
      'Boolean': 2
      'Text 1': 7
      'Text 2': 7
    }
  }

  'VFX Variable': {
    inputs: {
      'Particles': 13
    }
  }

  'Logic Opr': {
    inputs: {
      'Type': 0
      'a': 2
      'b': 2
    }
  }

  'Mix Color': {
    inputs: {
      'Color from': 3
      'Color to': 3
      'Mix': 1
      'Mode': 0
    }
  }

  'Vector3': {
    inputs: {
      'x': 1
      'y': 1
      'z': 1
      'Integer': 2
    }
  }

  'Camera': {
    inputs: {
      'Background': 4
      'Focus area': 0
      'Zoom': 1
      'Oversample mode': 0
      'Fix background': 2
      'Element 0': 4
      'Parallax 0': 1
    }
  }

  'Boolean Trigger': {
    inputs: {
      'Boolean': 2
      'Trigger condition': 0
    }
  }

  'Array Length': {
    inputs: {
      'Array': 11
    }
  }

  'Blur': {
    inputs: {
      'Surface in': 4
      'Size': 1
      'Oversample mode': 0
      'Override color': 2
      'Color': 3
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Text File Out': {
    inputs: {
      'Path': 5
      'Content': 7
    }
  }

  'Image': {
    inputs: {
      'Path': 5
      'Padding': 0
    }
  }

  'Blend': {
    inputs: {
      'Background': 4
      'Foreground': 4
      'Blend mode': 0
      'Opacity': 1
      'Mask': 4
      'Fill mode': 0
      'Output dimension': 0
      'Constant dimension': 0
      'Active': 2
      'Preserve alpha': 2
      'Horizontal Align': 0
      'Vertical Align': 0
    }
  }

  'Stripe': {
    inputs: {
      'Dimension': 0
      'Amount': 1
      'Angle': 0
      'Blend': 2
      'Position': 0
      'Random': 1
      'Random color': 2
      'Colors': 22
      'Color 1': 3
      'Color 2': 3
    }
  }

  'Hexagonal Grid': {
    inputs: {
      'Dimension': 0
      'Position': 1
      'Scale': 1
      'Angle': 0
      'Gap': 1
      'Tile color': 22
      'Gap color': 3
      'Render type': 0
      'Seed': 1
      'Texture': 4
    }
  }

  'Array Zip': {
    inputs: {
      'Array': 11
      'Value': 11
    }
  }

  'Strand Render': {
    inputs: {
      'Dimension': 0
      'Strand': 17
      'Thickness': 1
      'Thickness over length': 6
      'Random color': 22
      'Color over length': 22
      'Seed': 1
      'Child': 1
    }
  }

  'Array Add': {
    inputs: {
      'Array': 11
      'Spread array': 2
      'Value': 11
    }
  }

  'Queue Domain': {
    inputs: {
      'Input': 15
    }
  }

  '3D Sphere': {
    inputs: {
      'Subdivisions': 0
      'Dimension': 0
      'Render position': 1
      'Render rotation': 1
      'Render scale': 1
      'Textures': 4
      'Object scale': 1
      'Light direction': 1
      'Light height': 1
      'Light intensity': 1
      'Light color': 3
      'Ambient color': 3
      'Object rotation': 1
      'Object position': 1
      'Projection': 0
      'Field of view': 1
      'Scale view with dimension': 2
    }
  }

  'Scale Algorithm': {
    inputs: {
      'Surface in': 4
      'Algorithm': 0
      'Tolerance': 1
      'Active': 2
    }
  }

  'Activate Physics': {
    inputs: {
      'Object': 14
      'Physics activated': 2
    }
  }

  'Pixel Cloud': {
    inputs: {
      'Surface in': 4
      'Seed': 0
      'Strength': 1
      'Strength map': 4
      'Color over lifetime': 22
      'Distance': 1
      'Alpha over lifetime': 6
      'Random blending': 1
      'Active': 2
    }
  }

  'Dilate': {
    inputs: {
      'Surface in': 4
      'Center': 1
      'Strength': 1
      'Radius': 1
      'Oversample mode': 0
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Anisotropic Noise': {
    inputs: {
      'Dimension': 0
      'Amount': 1
      'Seed': 1
      'Position': 1
      'Rotation': 1
    }
  }

  'WAV File Out': {
    inputs: {
      'Path': 5
      'Audio Data': 1
      'Sample': 0
      'Bit Depth': 0
      'Remap Data': 2
      'Data Range': 1
    }
  }

  'RGBA Combine': {
    inputs: {
      'Red': 4
      'Green': 4
      'Blue': 4
      'Alpha': 4
      'Sampling type': 0
    }
  }

  'VFX': {
    inputs: {
    }
  }

  'Level': {
    inputs: {
      'Surface in': 4
      'White': 1
      'Red': 1
      'Green': 1
      'Blue': 1
      'Alpha': 1
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Chromatic Aberration': {
    inputs: {
      'Surface in': 4
      'Center': 1
      'Strength': 1
      'Active': 2
    }
  }

  'Loop amount': {
    inputs: {
    }
  }

  'Zoom Blur': {
    inputs: {
      'Surface in': 4
      'Strength': 1
      'Center': 1
      'Oversample mode': 0
      'Zoom mode': 0
      'Blur mask': 4
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Invert': {
    inputs: {
      'Surface in': 4
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Atlas Set': {
    inputs: {
      'Atlas': 20
      'Surface': 4
      'Position': 1
      'Rotation': 1
      'Scale': 1
      'Blend': 3
      'Alpha': 1
    }
  }

  'Text Length': {
    inputs: {
      'Text': 7
      'Mode': 0
    }
  }

  'Palette to Gradient': {
    inputs: {
      'Palette': 3
      'Custom positions': 2
      'Positions': 1
      'Blending': 0
    }
  }

  'Array Range': {
    inputs: {
      'Start': 1
      'End': 1
      'Step': 1
    }
  }

  'Strand Break': {
    inputs: {
      'Strand': 17
      'Shape': 0
      'Position': 1
      'Range': 1
      'Direction': 0
      'Falloff': 1
      'Chance': 1
      'Seed': 0
    }
  }

  'Array to Anim': {
    inputs: {
      'Surface in': 4
      'Speed': 1
    }
  }

  'Flip': {
    inputs: {
      'Surface in': 4
      'Axis': 0
      'Active': 2
    }
  }

  '3D Cylinder': {
    inputs: {
      'Sides': 0
      'Thickness': 1
      'Dimension': 0
      'Render position': 1
      'Render rotation': 1
      'Render scale': 1
      'Textures top': 4
      'Textures bottom': 4
      'Textures side': 4
      'Object scale': 1
      'Light direction': 1
      'Light height': 1
      'Light intensity': 1
      'Light color': 3
      'Ambient color': 3
      'Object rotation': 1
      'Object position': 1
      'Projection': 0
      'Field of view': 1
      'Taper': 1
      'Scale view with dimension': 2
    }
  }

  'Rigidbody Override': {
    inputs: {
      'Object': 14
      'Positions': 1
      'Scales': 1
      'Rotations': 1
      'Blends': 3
      'Alpha': 1
      'Velocity': 1
    }
  }

  'Trim Path': {
    inputs: {
      'Path': 12
      'Range': 1
    }
  }

  'Crop Content': {
    inputs: {
      'Surface in': 4
      'Active': 2
      'Array': 0
      'Padding': 0
    }
  }

  'Path': {
    inputs: {
      'Path progress': 1
      'Loop': 2
      'Progress mode': 0
      'Round anchor': 2
    }
  }

  'Normal Light': {
    inputs: {
      'Surface in': 4
      'Normal map': 4
      'Normal intensity': 1
      'Ambient': 3
      'Light position': 1
      'Light range': 1
      'Light intensity': 1
      'Light color': 3
      'Light type': 0
      'Active': 2
    }
  }

  'Morph Surface': {
    inputs: {
      'Surface from': 4
      'Surface to': 4
      'Morph amount': 1
      'Threshold': 1
    }
  }

  'Turbulence': {
    inputs: {
      'Fluid Domain': 13
      'Effect area': 1
      'Strength': 6
      'Scale': 1
      'Seed': 1
      'Mode': 1
    }
  }

  'Local Analyze': {
    inputs: {
      'Surface in': 4
      'Algorithm': 0
      'Size': 1
      'Oversample mode': 0
      'Shape': 0
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'HSV Color': {
    inputs: {
      'Hue': 1
      'Saturation': 1
      'Value': 1
      'Normalized': 2
    }
  }

  'Vector2': {
    inputs: {
      'x': 1
      'y': 1
      'Integer': 2
      'Display': 0
      'Reset to center': 19
    }
  }

  'Trigger': {
    inputs: {
      'Trigger': 19
    }
  }

  'Bloom': {
    inputs: {
      'Surface in': 4
      'Size': 1
      'Tolerance': 1
      'Strength': 1
      'Bloom mask': 4
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Text File In': {
    inputs: {
      'Path': 5
    }
  }

  'Trim Text': {
    inputs: {
      'Text': 7
      'Head': 0
      'Tail': 0
      'Trim': 0
      'Mode': 0
    }
  }

  'Grid': {
    inputs: {
      'Dimension': 0
      'Position': 1
      'Scale': 1
      'Gap': 1
      'Angle': 1
      'Tile color': 22
      'Gap color': 3
      'Texture': 4
      'Shift': 1
      'Shift axis': 0
      'Render type': 0
      'Seed': 1
    }
  }

  'Sort Number': {
    inputs: {
      'Array in': 11
      'Order': 0
    }
  }

  'Strand Length Adjust': {
    inputs: {
      'Strand': 17
      'Shape': 0
      'Position': 1
      'Range': 1
      'Direction': 0
      'Falloff': 1
      'Type': 0
      'Strength': 1
    }
  }

  'Array': {
    inputs: {
      'Type': 0
      'Spread array': 2
      'Input': 11
    }
  }

  'Skew': {
    inputs: {
      'Surface in': 4
      'Axis': 0
      'Amount': 1
      'Wrap': 2
      'Center': 0
      'Oversample mode': 0
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Fluid Domain': {
    inputs: {
      'Dimension': 0
      'Collision': 4
      'Material dissipation type': 0
      'Material dissipation': 1
      'Velocity dissipation type': 0
      'Velocity dissipation': 1
      'Acceleration': 1
      'Material intertia': 1
      'Initial pressure': 1
      'Material maccormack weight': 1
      'Velocity maccormack weight': 1
      'Wrap': 2
      'Loop': 2
    }
  }

  '3D Repeat': {
    inputs: {
      'Dimension': 0
      'Object position': 1
      'Object rotation': 1
      'Object scale': 1
      'Render position': 1
      'Render scale': 1
      'Light direction': 1
      'Light height': 1
      'Light intensity': 1
      'Light color': 3
      'Ambient color': 3
      '3D object': 10
      'Repeat': 0
      'Repeat position': 1
      'Repeat rotation': 1
      'Repeat scale': 1
      'Repeat pattern': 0
      'Axis': 0
      'Radius': 1
      'Rotation': 0
      'Projection': 0
      'Field of view': 1
      'Scale view with dimension': 2
    }
  }

  'Scale': {
    inputs: {
      'Surface in': 4
      'Scale': 1
      'Mode': 0
      'Target dimension': 1
      'Active': 2
    }
  }

  'Export': {
    inputs: {
      'Surface': 4
      'Paths': 5
      'Template': 7
      'Type': 0
      'Template guides': 0
      'Loop': 2
      'Frame optimization': 2
      'Color merge': 1
      'Framerate': 0
      'Format': 0
      'Quality': 1
      'Sequence begin': 0
    }
  }

  'RGBA Extract': {
    inputs: {
      'Surface in': 4
      'Output type': 0
    }
  }

  'De-Stray': {
    inputs: {
      'Surface in': 4
      'Tolerance': 1
      'Active': 2
    }
  }

  'Remap Path': {
    inputs: {
      'Path': 12
      'Area': 0
    }
  }

  'Padding': {
    inputs: {
      'Surface in': 4
      'Padding': 0
      'Fill method': 0
      'Fill color': 3
      'Active': 2
      'Pad mode': 0
      'Target dimension': 0
      'Horizontal alignment': 0
      'Vertical alignment': 0
    }
  }

  'Noise': {
    inputs: {
      'Dimension': 0
      'Seed': 1
      'Color mode': 0
      'Color R range': 1
      'Color G range': 1
      'Color B range': 1
    }
  }

  'Frame Index': {
    inputs: {
      'Start': 1
      'Speed': 1
      'Mode': 0
    }
  }

  'WAV File In': {
    inputs: {
      'Path': 5
      'Sync lenght': 0
    }
  }

  'Math': {
    inputs: {
      'Type': 0
      'a': 1
      'b': 1
      'Degree angle': 2
      'To integer': 2
      'Amount': 1
    }
  }

  'HSV Combine': {
    inputs: {
      'Hue': 4
      'Saturation': 4
      'Value': 4
    }
  }

  'Checker': {
    inputs: {
      'Dimension': 0
      'Amount': 1
      'Angle': 0
      'Position': 0
      'Color 1': 3
      'Color 2': 3
    }
  }

  'Simple Blur': {
    inputs: {
      'Surface in': 4
      'Size': 1
      'Oversample mode': 0
      'Blur mask': 4
      'Override color': 2
      'Color': 3
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Replace Image': {
    inputs: {
      'Base Image': 4
      'Target Image': 4
      'Replacement Image': 4
      'Color Threshold': 1
      'Draw Base Image': 2
      'Fast Mode': 2
      'Pixel Threshold': 1
      'Array mode': 0
      'Seed': 1
    }
  }

  'Atlas Get': {
    inputs: {
      'Atlas': 20
    }
  }

  'Join Text': {
    inputs: {
      'Text array': 7
      'Divider': 7
    }
  }

  'Statistic': {
    inputs: {
      'Type': 0
      'Input': 1
    }
  }

  'Update Domain': {
    inputs: {
      'Fluid Domain': 15
      'Active': 2
    }
  }

  'Alpha to Grey': {
    inputs: {
      'Surface in': 4
      'Active': 2
    }
  }

  'Separate Shape': {
    inputs: {
      'Surface in': 4
      'Tolerance': 1
      'Override color': 2
      'Color': 3
      'Ignore blank': 2
    }
  }

  'Find pixel': {
    inputs: {
      'Surface in': 4
      'Search color': 3
    }
  }

  '3D Cube': {
    inputs: {
      'Main texture': 4
      'Dimension': 0
      'Render position': 1
      'Render rotation': 1
      'Render scale': 1
      'Textures per face': 2
      'Textures 0': 4
      'Textures 1': 4
      'Textures 2': 4
      'Textures 3': 4
      'Textures 4': 4
      'Textures 5': 4
      'Object scale': 1
      'Light direction': 1
      'Light height': 1
      'Light intensity': 1
      'Light color': 3
      'Ambient color': 3
      'Object rotation': 1
      'Object position': 1
      'Projection': 0
      'Field of view': 1
      'Scale view with dimension': 2
    }
  }

  'Object Spawner': {
    inputs: {
      'Object': 14
      'Spawn area': 1
      'Spawn type': 0
      'Spawn delay': 0
      'Spawn amount': 0
      'Spawn frame': 0
      'Spawn': 2
      'Seed': 0
    }
  }

  'Print': {
    inputs: {
      'Active': 2
      'Text': 7
    }
  }

  'Transform Path': {
    inputs: {
      'Path': 12
      'Position': 1
      'Rotation': 0
      'Scale': 1
      'Anchor': 1
    }
  }

  'Crop': {
    inputs: {
      'Surface in': 4
      'Crop': 0
      'Active': 2
    }
  }

  'Particle': {
    inputs: {
      'Particle sprite': 4
      'Spawn delay': 0
      'Spawn amount': 0
      'Spawn area': 1
      'Spawn distribution': 0
      'Lifespan': 0
      'Spawn direction': 0
      'Acceleration': 1
      'Orientation': 0
      'Rotational speed': 1
      'Spawn scale': 1
      'Scale over time': 6
      'Color over lifetime': 22
      'Alpha': 1
      'Alpha over time': 6
      'Rotate by direction': 2
      'Spawn type': 0
      'Spawn size': 1
      'Spawn velocity': 1
      'Gravity': 1
      'Wiggle': 1
      'Loop': 2
      'Surface array': 0
      'Animation speed': 1
      'Scatter': 0
      'Boundary data': 0
      'On animation end': 0
      'Spawn': 2
      'Random blend': 22
      'Directed from center': 2
      'Distribution map': 4
      'Distribution data': 1
      'Seed': 1
      'Gravity direction': 0
      'Turning': 1
      'Turn both directions': 2
      'Turn scale with speed': 2
      'Output dimension': 0
      'Round position': 2
      'Blend mode': 0
    }
  }

  'Normal': {
    inputs: {
      'Surface in': 4
      'Height': 1
      'Smooth': 2
      'Active': 2
    }
  }

  'Wiggler': {
    inputs: {
      'Range': 1
      'Frequency': 0
      'Seed': 1
      'Display': 0
    }
  }

  'Mirror': {
    inputs: {
      'Surface in': 4
      'Position': 1
      'Angle': 0
      'Active': 2
    }
  }

  'Color Data': {
    inputs: {
      'Color': 3
      'Normalize': 2
    }
  }

  'Vector Split': {
    inputs: {
      'Vector': 1
    }
  }

  'JSON File Out': {
    inputs: {
      'Path': 5
      'Struct': 16
      'Key': 7
      'value': 11
    }
  }

  'Cache Array': {
    inputs: {
      'Surface in': 4
      'Start frame': 0
      'Stop frame': 0
      'Step': 0
    }
  }

  'Draw Text': {
    inputs: {
      'Text': 7
      'Font': 5
      'Size': 0
      'Anti-Aliasing ': 2
      'Character range': 0
      'Color': 3
      'Fixed dimension': 0
      'Horizontal alignment': 0
      'Vertical alignment': 0
      'Output dimension': 0
      'Padding': 0
    }
  }

  'HSV Extract': {
    inputs: {
      'Surface in': 4
    }
  }

  'Split Text': {
    inputs: {
      'Text': 7
      'Delimiter': 7
    }
  }

  'Greyscale': {
    inputs: {
      'Surface in': 4
      'Brightness': 1
      'Contrast': 1
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Shuffle Array': {
    inputs: {
      'Array in': 11
      'Seed': 0
    }
  }

  'StrandSim': {
    inputs: {
    }
  }

  'FXAA': {
    inputs: {
      'Surface in': 4
    }
  }

  'Apply Velocity': {
    inputs: {
      'Fluid Domain': 15
      'Brush': 4
      'Position': 1
      'Velocity': 1
      'Active': 2
    }
  }

  '3D Plane': {
    inputs: {
      'Surface in': 4
      'Render position': 1
      'Object rotation': 1
      'Render scale': 1
      'Output dimension': 0
      'Constant dimension': 0
      'Object position': 1
      'Object scale': 1
      'Projection': 0
      'Field of view': 1
      'Texture scale': 1
      'Texture shift': 1
      'Subdiviion': 0
      'Normal axis': 0
    }
  }

  'Sampler': {
    inputs: {
      'Surface in': 4
      'Position': 1
      'Sampling size': 0
    }
  }

  'Erode': {
    inputs: {
      'Surface in': 4
      'Width': 0
      'Preserve border': 2
      'Use alpha': 2
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'De-Corner': {
    inputs: {
      'Surface in': 4
      'Active': 2
      'Tolerance': 1
    }
  }

  'L system': {
    inputs: {
      'Length': 1
      'Angle': 0
      'Starting position': 1
      'Iteration': 0
      'Starting rule': 7
      'End replacement': 7
      'Starting angle': 0
      'Name 0': 7
      'Rule 0': 7
    }
  }

  'Pack Sprites': {
    inputs: {
      'Sprites': 4
      'Algorithm': 0
      'Max width': 0
      'Max height': 0
      'Spacing': 0
    }
  }

  'Corner': {
    inputs: {
      'Surface in': 4
      'Radius': 1
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Colorize': {
    inputs: {
      'Surface in': 4
      'Gradient': 22
      'Gradient shift': 1
      'Mask': 4
      'Mix': 1
      'Active': 2
      'Multiply alpha': 2
    }
  }

  'Destroy': {
    inputs: {
      'Particles': 13
      'Area': 1
      'Falloff': 6
      'Falloff distance': 1
      'Effect Vector': 1
      'Strength': 1
      'Rotate particle': 1
      'Scale particle': 1
    }
  }

  'Unicode': {
    inputs: {
      'Unicode': 0
    }
  }

  'Index': {
    inputs: {
    }
  }

  'Radial Blur': {
    inputs: {
      'Surface in': 4
      'Strength': 1
      'Center': 1
      'Oversample mode': 0
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Splice Spritesheet': {
    inputs: {
      'Surface in': 4
      'Sprite size': 0
      'Row': 0
      'Amount': 0
      'Offset': 0
      'Spacing': 0
      'Padding': 0
      'Output': 0
      'Animation speed': 1
      'Orientation': 0
      'Auto fill': 19
      'Sync animation': 19
      'Filter empty output': 2
      'Filtered Pixel': 0
      'Filtered Color': 3
    }
  }

  'Draw Atlas': {
    inputs: {
      'Dimension': 0
      'Atlas': 20
    }
  }

  'Get Character': {
    inputs: {
      'Text': 7
      'Index': 0
      'Amount': 0
    }
  }

  'Gradient Data': {
    inputs: {
      'Gradient': 22
    }
  }

  'Array Insert': {
    inputs: {
      'Array': 11
      'Index': 0
      'Value': 11
      'Spread array': 2
    }
  }

  'Alpha Cutoff': {
    inputs: {
      'Surface in': 4
      'Minimum': 1
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'FFT': {
    inputs: {
      'Data': 1
      'Preprocess Function': 0
    }
  }

  '3D Cone': {
    inputs: {
      'Dimension': 0
      'Render position': 1
      'Render rotation': 1
      'Render scale': 1
      'Object scale': 1
      'Light direction': 1
      'Light height': 1
      'Light intensity': 1
      'Light color': 3
      'Ambient color': 3
      'Object rotation': 1
      'Object position': 1
      'Projection': 0
      'Field of view': 1
      'Sides': 0
      'Textures base': 4
      'Textures side': 4
      'Scale view with dimension': 2
    }
  }

  'Object': {
    inputs: {
      'Affect by force': 2
      'Weight': 1
      'Contact friction': 1
      'Air resistance': 1
      'Rotation resistance': 1
      'Shape': 0
      'Texture': 4
      'Start shape': 1
      'Spawn': 2
      'Generate mesh': 19
      'Mesh expansion': 1
    }
  }

  'Posterize': {
    inputs: {
      'Surface in': 4
      'Palette': 3
      'Use palette': 2
      'Colors': 0
      'Gamma': 1
      'Active': 2
    }
  }

  'Dither': {
    inputs: {
      'Surface in': 4
      'Palette': 3
      'Pattern': 0
      'Dither map': 4
      'Contrast': 1
      'Contrast map': 4
      'Mode': 0
      'Mask': 4
      'Mix': 1
      'Active': 2
    }
  }

  'Shift Path': {
    inputs: {
      'Path': 12
      'Distance': 1
    }
  }

  'Sort Palette': {
    inputs: {
      'Palette in': 3
      'Order': 0
      'Reverse': 2
    }
  }

  'Triangular Noise': {
    inputs: {
      'Dimension': 0
      'Seed': 1
      'Position': 1
      'Scale': 1
      'Texture sample': 4
      'Oversample mode': 0
    }
  }

  'Websocket Sender': {
    inputs: {
      'Port': 0
      'Data type': 0
      'Struct': 16
      'Surface': 4
      'Path': 5
      'Target': 7
    }
  }

  'Mesh Warp': {
    inputs: {
      'Surface in': 4
      'Sample': 0
      'Spring Force': 1
      'Mesh': 19
      'Diagonal Link': 2
      'Active': 2
      'Link Strength': 1
      'Full Mesh': 2
    }
  }

  'Spawner': {
    inputs: {
      'Particle sprite': 4
      'Spawn delay': 0
      'Spawn amount': 0
      'Spawn area': 1
      'Spawn distribution': 0
      'Lifespan': 0
      'Spawn direction': 0
      'Acceleration': 1
      'Orientation': 0
      'Rotational speed': 1
      'Spawn scale': 1
      'Scale over time': 6
      'Color over lifetime': 22
      'Alpha': 1
      'Alpha over time': 6
      'Rotate by direction': 2
      'Spawn type': 0
      'Spawn size': 1
      'Spawn velocity': 1
      'Gravity': 1
      'Wiggle': 1
      'Loop': 2
      'Surface array': 0
      'Animation speed': 1
      'Scatter': 0
      'Boundary data': 0
      'On animation end': 0
      'Spawn': 2
      'Random blend': 22
      'Directed from center': 2
      'Distribution map': 4
      'Distribution data': 1
      'Seed': 1
      'Gravity direction': 0
      'Turning': 1
      'Turn both directions': 2
      'Turn scale with speed': 2
      'Spawn trigger': 9
      'Step interval': 0
    }
  }

  'Line': {
    inputs: {
      'Dimension': 0
      'Background': 2
      'Segment': 0
      'Width': 1
      'Wiggle': 1
      'Random seed': 1
      'Rotation': 0
      'Path': 12
      'Range': 1
      'Shift': 1
      'Color over length': 22
      'Width over length': 6
      'Span width over path': 2
      'Round cap': 2
      'Round segment': 0
      'Span color over path': 2
      'Greyscale over width': 2
      '1px mode': 2
      'Texture': 4
      'Fix length': 2
      'Segment length': 1
      'Texture position': 1
      'Texture rotation': 1
      'Texture scale': 1
    }
  }

  'Color Adjust': {
    inputs: {
      'Surface in': 4
      'Brightness': 1
      'Contrast': 1
      'Hue': 1
      'Saturation': 1
      'Value': 1
      'Blend': 3
      'Blend alpha': 1
      'Mask': 4
      'Alpha': 1
      'Exposure': 1
      'Active': 2
      'Input Type': 0
      'Color': 3
    }
  }

  'Dot product': {
    inputs: {
      'Point 1': 1
      'Point 2': 1
    }
  }

  'JSON File In': {
    inputs: {
      'Path': 5
      'Key': 7
    }
  }

  'Cache': {
    inputs: {
      'Surface in': 4
    }
  }

  'Sort Array': {
    inputs: {
      'Array': 11
    }
  }

  'Bevel': {
    inputs: {
      'Surface in': 4
      'Height': 0
      'Shift': 1
      'Scale': 1
      'Slope': 0
      'Mask': 4
      'Mix': 1
      'Active': 2
      'Oversample mode': 0
    }
  }

  'RegEx Search': {
    inputs: {
      'Text': 7
      'Regex': 7
    }
  }

  'Grey to Alpha': {
    inputs: {
      'Surface in': 4
      'Replace color': 2
      'Color': 3
      'Active': 2
    }
  }

  'Array Shift': {
    inputs: {
      'Array': 11
      'Shift': 0
    }
  }

  'Strand Gravity': {
    inputs: {
      'Strand': 17
      'Gravity': 1
      'Direction': 0
    }
  }

  'Polygon Shape': {
    inputs: {
      'Dimension': 0
      'Background': 2
      'Background color': 3
      'Shape color': 3
      'Shape': 0
      'Position': 1
      'Rotation': 1
      'Scale': 0
      'Sides': 0
      'Inner radius': 1
      'Radius': 1
      'Teeth': 0
      'Teeth height': 1
      'Teeth taper': 1
      'Angle range': 1
      'Round cap': 2
      'Mesh': 18
    }
  }

  'Add Collider': {
    inputs: {
      'Fluid Domain': 15
      'Collider': 4
      'Area': 1
    }
  }

  '3D Object': {
    inputs: {
      'Path': 5
      'Generate': 19
      'Dimension': 0
      'Render position': 1
      'Render rotation': 1
      'Render scale': 1
      'Light direction': 1
      'Light height': 1
      'Light intensity': 1
      'Light color': 3
      'Ambient color': 3
      'Object scale': 1
      'Flip UV': 2
      'Object rotation': 1
      'Object position': 1
      'Projection': 0
      'Field of view': 1
      'Scale view with dimension': 2
    }
  }

  'Equation': {
    inputs: {
      'Equation': 7
      'Argument name': 7
      'Argument value': 1
    }
  }

  'Repeat': {
    inputs: {
      'Surface in': 4
      'Dimension': 0
      'Amount': 0
      'Pattern': 0
      'Repeat position': 1
      'Repeat rotation': 0
      'Scale multiply': 1
      'Angle range': 0
      'Radius': 1
      'Start position': 1
      'Scale over copy': 6
      'Path': 12
      'Path range': 1
      'Path shift': 1
      'Color over copy': 22
      'Alpha over copy': 6
      'Array select': 0
      'Seed': 0
      'Column': 0
      'Column shift': 1
      'Animator midpoint': 1
      'Animator range': 1
      'Animator position': 1
      'Animator rotation': 0
      'Animator scale': 1
      'Animator falloff': 6
      'Stack': 0
      'Animator blend': 3
      'Animator alpha': 1
    }
  }

  'Pin': {
    inputs: {
      'In': 11
    }
  }

  'Path Builder': {
    inputs: {
      'Point array': 1
      'Connected': 2
    }
  }

}