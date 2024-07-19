//
//  CircularProgressBar.swift
//  SwiftVideos
//
//  Created by Gokhan Kaya on 19.07.2024.
//

import SwiftUI

struct CircularProgressBar: View {
    @State private var progress: CGFloat = 0.5
    @State private var inputProgres : Double = 50
    var body: some View {
        VStack {
            ZStack{
                Circle()
                    .stroke(Color.gray.opacity(0.3),lineWidth: 20)
                Circle()
                    .trim(from: 0,to:progress)
                    .stroke(Color.blue,lineWidth: 20)
                    .rotationEffect(.degrees(-90))
                    .animation(.easeInOut(duration: 0.5), value: progress)
                Text("\(Int(progress*100))%")
                    .font(.largeTitle)
                    .bold()
            }
            .padding()
            
            Slider(
            value: $inputProgres,
            in: 0...100,
            step:1,
            onEditingChanged: {_ in updateProgress()}
            )
            .padding()
            .accentColor(.blue)
            
            Text("Progress: \(Int(inputProgres))%")
                .font(.headline)
                .padding()
        }
        
    }
    private func updateProgress(){
        progress = CGFloat(inputProgres/100.0)
    }
}

#Preview {
    CircularProgressBar()
}
